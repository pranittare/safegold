"use client"
import { Box, Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent,  ModalOverlay, Radio, RadioGroup, Stack, Text, background, useDisclosure } from "@chakra-ui/react"
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"
import { ChangeEvent, useState } from "react"
import {auth} from '../../app/config'

var interval:any = null;
type LoginProps = {
    login: boolean
}

const Login = ({login}:LoginProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [value, setValue] = useState<string>('1')
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [otp, setOtp] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [showOTP, setShowOTP] = useState<boolean>(false);
    const [timer, setTimer] = useState<number>(120);
    const [user, setUser] = useState<any>();

    auth.useDeviceLanguage();

    const handleClose = () => {
        clearInterval(interval)
        setTimer(120)
        onClose()
    }
    
    function onCaptchVerify() {
        if (!(window as any).recaptchaVerifier) {
          (window as any).recaptchaVerifier = new RecaptchaVerifier(
            auth,"recaptcha-container",
            {
              size: "invisible",
              callback: (response:any) => {
                onSignup();
              },
              "expired-callback": () => {},
            },
          );
        }
      }
    const optTimer  = () => {
        interval = setInterval(()=> {
            setTimer((prev: number) => {
                if (prev <= 1) {
                    clearInterval(interval);
                     return 0
                } else {
                    return prev -1
                }
                })
        }, 1000);
    }
    const onSignup =() => {
        setLoading(true);
        onCaptchVerify();
    
        const appVerifier = (window as any).recaptchaVerifier;
    
        const formatPh = "+91" + phoneNumber;
    
        signInWithPhoneNumber(auth, formatPh, appVerifier)
          .then((confirmationResult) => {
            (window as any).confirmationResult = confirmationResult;
            setLoading(false);
            setShowOTP(true);
            optTimer()
          //   toast.success("OTP sended successfully!");
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          });
      }
      const onOTPVerify = () => {
        setLoading(true);
        (window as any).confirmationResult
          .confirm(otp)
          .then(async (res:any) => {
            console.log(res);
            setUser(res.user);
            setLoading(false);
          })
          .catch((err:any) => {
            console.log(err);
            setLoading(false);
          });
      }

    return (
        <>
          {login ?  <Button onClick={onOpen} color={'black'} _hover={{background: 'transparent', borderBottom:'1px'}} borderRadius={'none'} height={'24px'} variant={'ghost'} px={0} >Login</Button>
          :  <Button onClick={onOpen} colorScheme="teal">Signup</Button>}
            <Modal isOpen={isOpen} onClose={handleClose}>React
                <ModalOverlay />
                <ModalContent>
                     
                    <ModalCloseButton/>
                    <ModalBody>
                        {/* <PhoneAuthForm /> */}
                        <Box padding={'16px'} mt={'16px'}>
                            <Text color='teal' fontSize={'2xl'}>{showOTP ? 'Verify OTP' :'Login/ Signup'}</Text>
                           {showOTP ? <Text my={'32px'}>
                            Verify Mobile Number <b>{phoneNumber} </b> <Button variant={"link"} onClick={()=> setShowOTP(false)} color={'goldenrod'}>Change</Button>
                           </Text> : <RadioGroup my={'32px'} onChange={setValue} value={value} colorScheme="teal" color='teal'>
                                <Stack direction='row'>
                                    <Radio value='1'>Customer</Radio>
                                    <Radio value='2'>Partner</Radio>
                                </Stack>
                            </RadioGroup>}

                           {showOTP ? <><Input my={'32px'} variant='flushed' placeholder="Enter One Time Password (OTP)" value={otp}  onChange={(e: ChangeEvent<HTMLInputElement>) => setOtp(e.target.value)}/>
                           <Text fontSize={'small'} color={'grey'}>{`Didn't receive OTP? Resend in ${timer}`}</Text>
                            </>: <Input variant='flushed' placeholder="Enter Mobile Number" value={phoneNumber}  onChange={(e: ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value)} />}
                            <button role="button" id="recaptcha-container" type="button"/>

                          {showOTP ? <>
                            <Button my={'32px'} w={'100%'} onClick={onOTPVerify}>Verify</Button>
                            <Text fontSize={'small'} fontWeight={'bold'} textAlign='center' className="color-golden">Send OTP over registered email</Text>
                          </> :<><Button my={'32px'} w={'100%'} onClick={onSignup}>Proceed</Button>
                            <Text fontSize={'small'}>By proceeding you agree to our <span className="color-golden">
                            Terms and Conditions</span></Text>
                            </>
                            }
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
export default Login