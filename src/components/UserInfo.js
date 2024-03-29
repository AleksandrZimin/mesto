export default class UserInfo {
  constructor({ profileName, profileJob, avatar }) {
    this._profileName = document.querySelector(profileName);
    this._profileJob = document.querySelector(profileJob);
    this._avatar = document.querySelector(avatar);
  }

  getUserInfo() {
    const name = this._profileName.textContent;
    const job = this._profileJob.textContent;

    return { name, job };
  }

  setUserInfo({ name, job, avatar }) {
    this._profileName.textContent = name;
    this._profileJob.textContent = job;
    this._avatar.src = avatar;
  }
}
