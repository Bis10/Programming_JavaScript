// Create a Magic 8-Ball program that emulates the classic fortune-telling toy. The user will input a yes-or-no question, and the program will output a random response from the 8-Ball. Implement the program using conditional statements to select and display one of several predefined responses.

const button = document.querySelector("#ask-button");addEventListener("click", function() {
  const question = document.querySelector("#question").value.trim();
  if (question.slice(-1) !== '?') {
      alert("Please ask a question (end with a question mark).");
  } else {
      const randomIndex = Math.floor(Math.random() * 8);
      let answer = document.querySelector("#answer");
      switch (randomIndex) {
            case 0:
                answer = "That is strange! You look like alien.";
                break;
            case 1:
                answer = "Not your cup of tea.";
                break;
            case 2:
                answer = "Go home your are drunk.";
                break;
            case 3:
                answer = "How is that even possible.";
                break;
            case 4:
                answer = "Yes but see no body cares.";
                break;
            case 5:
                answer = "Well! That look similar to me.";
                break;
            case 6:
                answer = "Keep diggin you will find gold.";
                break;
            case 7:
                answer = "Don't try it at home.";
                break;
                default:
                  answer = "Invalid input. Please question 'yes' or 'no'.";
        }
        document.querySelector("#answer").textContent = answer;
    }
});
