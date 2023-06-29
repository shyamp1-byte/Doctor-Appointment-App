
const generateNewUserID = (UID) => {
    const currentYear=new Date().getFullYear();
    const incriment=parseInt(UID.toString().slice(4))+1;
    let preceeding=String('');
    const reqlength=10-parseInt(incriment.toString().length+4);
    for (let i =0; i<reqlength; i++) {
      preceeding=preceeding+'0';
    }
    // eslint-disable-next-line max-len
    const newUserID=currentYear.toString()+preceeding.toString()+incriment.toString();
    return newUserID;
  };

  module.exports={
    generateNewUserID
  };