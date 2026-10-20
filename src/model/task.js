export default class Task {
  constructor(id, title,completed = false, date=""+ new Date().getDay() + "/" + new Date().getMonth() + "/" + new Date().getFullYear()) {
    this.id = id
    this.title = title;
    this.completed = completed;
    this.date = date;
  }
}