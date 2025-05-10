export const getErrorMessage = (response: any) => {
  if(response.error){
    if(Array.isArray(response.message)){
      return formatErrorMessage(response.message[0]);
    }
  }
  return formatErrorMessage(response.message);
}

const formatErrorMessage = (message: string) => {
  return message.charAt(0).toUpperCase() + message.slice(1);
} 
