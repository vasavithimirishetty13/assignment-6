// Abstract Product Interface
class Loan {
  constructor() {
    if (new.target === Loan) {
      throw new TypeError("Cannot instantiate abstract class Loan directly");
    }
  }
  
  getDetails() {
    throw new Error("Method 'getDetails()' must be implemented.");
  }
}

// Concrete Products
class HomeLoan extends Loan {
  getDetails() {
    return "Home Loan: Interest Rate - 6.5%, Max Tenure - 20 years";
  }
}

class CarLoan extends Loan {
  getDetails() {
    return "Car Loan: Interest Rate - 7.0%, Max Tenure - 7 years";
  }
}

class EducationLoan extends Loan {
  getDetails() {
    return "Education Loan: Interest Rate - 5.5%, Max Tenure - 10 years";
  }
}

// Abstract Factory Interface
class LoanFactory {
  createLoan(type) {
    throw new Error("Method 'createLoan()' must be implemented.");
  }
}

// Concrete Factory
class ConcreteLoanFactory extends LoanFactory {
  createLoan(type) {
    switch(type) {
      case "home":
        return new HomeLoan();
      case "car":
        return new CarLoan();
      case "education":
        return new EducationLoan();
      default:
        throw new Error("Invalid loan type");
    }
  }
}

// Client Code
const loanFactory = new ConcreteLoanFactory();

const loanTypeSelect = document.getElementById("loanType");
const createLoanBtn = document.getElementById("createLoanBtn");
const loanDetailsDiv = document.getElementById("loanDetails");

createLoanBtn.addEventListener("click", () => {
  const selectedLoanType = loanTypeSelect.value;
  try {
    const loan = loanFactory.createLoan(selectedLoanType);
    loanDetailsDiv.textContent = loan.getDetails();
  } catch (error) {
    loanDetailsDiv.textContent = error.message;
  }
});
