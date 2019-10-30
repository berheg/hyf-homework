class Email{
    constructor(subject, body){
        this.subject = subject;
        this.body = body;
    }
}
class SpamDetector{
    //constructor(){
         isSpam(email){
            const bodyLength = email.body.length;
            const emailBody = email.body;
            const emailSubject = email.subject;
            const wordArray = ['Viagra','Offer','Free','Business Proposal'];
            const maxLength = parseInt(0.6*bodyLength);
            const numUpper = (email.match(/[a-z]/g) || []).length;
            if(numUpper > maxLength){
                for(let word in wordArray){
                    if(emailBody.includes(word))
                    return true;
                }                
            }
            else if(emailSubject === "Hello")
            return true;
        }        
    //}    
}
export default {Email, SpamDetector};