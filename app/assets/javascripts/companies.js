function getMeetingDetails(name, email, password){
  const domain = '159.89.167.38';
  const options = {
      roomName: name,
      width: 1200,
      height: 550,
      parentNode: document.querySelector('#meet'),
      userInfo: {
        email: email,
    }
  };
  const api = new JitsiMeetExternalAPI(domain, options);
  api.executeCommand('password', password);
}