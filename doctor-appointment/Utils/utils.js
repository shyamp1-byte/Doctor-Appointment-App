
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

  const generateNewDoctorID = (DID) => {
    const currentYear=new Date().getFullYear();
    const incriment=parseInt(DID.toString().slice(4))+1;
    let preceeding=String('');
    const reqlength=10-parseInt(incriment.toString().length+4);
    for (let i =0; i<reqlength; i++) {
      preceeding=preceeding+'0';
    }
    // eslint-disable-next-line max-len
    const NewDoctorID=currentYear.toString()+preceeding.toString()+incriment.toString();
    return NewDoctorID;
  };

  const generateNewAppointmentID = (AID) => {
    console.log(AID);
    const currentYear=new Date().getFullYear();
    const slicedAID=AID.slice(4);
    const incriment=parseInt(slicedAID.toString().slice(4))+1;
    let preceeding=String('');
    const reqlength=10-parseInt(incriment.toString().length+4);
    for (let i =0; i<reqlength; i++) {
      preceeding=preceeding+'0';
    }
    // eslint-disable-next-line max-len
    const NewAppointmentID=currentYear.toString()+preceeding.toString()+incriment.toString();
    return "AID-"+NewAppointmentID;
  };

  module.exports={
    generateNewUserID,
    generateNewDoctorID,
    generateNewAppointmentID
  };