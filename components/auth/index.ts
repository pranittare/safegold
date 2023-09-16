import { NextApiRequest, NextApiResponse } from "next";
import {auth} from '../../app/config'


const authMethod  = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  const phoneNumber = req.body.phoneNumber;

  try {
    await auth.signInWithPhoneNumber(phoneNumber);
    return res.status(200).json({ message: "Phone authentication successful." });
  } catch (error:any) {
    return res.status(500).json({ error: error.message });
  }
};

export default authMethod