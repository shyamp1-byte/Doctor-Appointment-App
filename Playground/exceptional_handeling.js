function withdrawBankBalaance(availableBalance,needtoWithdraw){
    try {
        let result=null;
       
        if(availableBalance>needtoWithdraw){
            result=availableBalance-needtoWithdraw;
            return result;
        }
        else{
            throw new TypeError("Type error occurred");
        }
        
    } catch (error) {
        return "Unable to withdraw your cash from this ATM at this movement. Please check your balance";
    }
    finally{  // Optional (no need to define)
        // Always run this statement
        console.log("Thank you for Visiting ICICI ATM - Have a good day...! ");
    }
    
}

console.log(withdrawBankBalaance(0,2));
