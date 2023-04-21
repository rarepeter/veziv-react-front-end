import { makeAutoObservable } from "mobx";

class ErrorModalStore {
  isVisible: boolean = false;
  text: string = "Error!";
  solution: string = "Try again later.";

  constructor() {
    makeAutoObservable(this);
  }

  setModal(text: string, solution?: string) {
    this.text = text;
    this.isVisible = true;
    if (solution) {
      this.solution = solution;
    } else {
      this.solution = "Try again later.";
    }
  }

  setIsVisible(bool: boolean) {
    this.isVisible = bool;
  }
}

const errorModalStore = new ErrorModalStore();

export { errorModalStore };
