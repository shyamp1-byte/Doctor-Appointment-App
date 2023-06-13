const chalk = require('chalk');

function withdrawBankBalaance(availableBalance,needtoWithdraw){
    try {
        let result=null;
        if(availableBalance>needtoWithdraw){
            result=availableBalance-needtoWithdraw;
            console.log(chalk.bgGreen("Here is the amount of money withdrawn: "+result+"  INR"));
            return result;
        }
        else{
            throw new TypeError("Type error occurred");
        }
        
    } catch (error) {
        console.log(chalk.bgRed("Unable to withdraw your cash from this ATM at this movement. Please check your balance"))
        return "Unable to withdraw your cash from this ATM at this movement. Please check your balance";
    }
    finally{  // Optional (no need to define)
        // Always run this statement

        console.log(chalk.bgBlue("Thank you for Visiting ICICI ATM - Have a good day...! "));
    }
    
}

withdrawBankBalaance(4,7);
