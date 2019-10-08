const inputEmailSubject= document.querySelector("input.emailSubject");
const textEmailBody = document.querySelector("textarea.emailBody");
const btnSpamChecker = document.querySelector('button.btnSpamChecker');

btnSpamChecker.addEventListener('click', btnSpamCheckerEventHandler);
function btnSpamCheckerEventHandler() {
    const emailFromOldFriend = new Email(inputEmailSubject.value, textEmailBody.value);    
    const spamDetector = new SpamDetector();
    if(spamDetector.isSpam(emailFromOldFriend)){
        textEmailBody.style.background = 'red';
        alert('Your email is Spam!');
    }     
    else {
        alert('No worry, you are safe!');
    }        
}
class Email{
    constructor(subject, body){
        this.subject  = subject;
        this.body = body;
    }
}
class SpamDetector{    
        isSpam(email){
            const emailSubject= email.subject;
            const emailBody = email.body;      
            const bodyLength = emailBody.length;            
            const maxLength = parseInt(0.6*bodyLength);
            const numUpper = (emailBody.match(/[A-Z]/g) || []).length;
            console.log(emailBody)
            console.log(wordChecker(emailBody));
            if(numUpper > maxLength){
                if(wordChecker(emailBody))
                return true;
            }else if(wordChecker(emailBody)){
                return true;
            }
            else if(emailSubject === "Hello")
                return true;
            else
                return false;
        }     

}
function wordChecker(body) {
    const wordArray = ['Viagra','Offer','Free','Business Proposal'];
    for(let str in wordArray){        
        if(body.includes(wordArray[str]))
            return true;
    } 
    return false;          

}