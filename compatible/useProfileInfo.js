import { ref } from "@nuxtjs/composition-api";
import profileInfo from "~/constants/profileInfo";

export function useProfileInfo() {
  const joycePhone = ref(profileInfo.phone);
  const joyceEmail = ref(profileInfo.email);
  const joyceLinkIn = ref(profileInfo.linkin);

  const makeCall = () => {
    window.location.href = `tel:${profileInfo.phoneDash}`;
  };

  const sendMail = () => {
    window.location.href = `mailto:${profileInfo.email}`;
  };

  return {
    joycePhone,
    joyceEmail,
    joyceLinkIn,
    makeCall,
    sendMail,
  };
}
