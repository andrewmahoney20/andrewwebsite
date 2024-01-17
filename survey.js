document.addEventListener("DOMContentLoaded", function()
{
    let image; // initialize image variable

    let buttons = document.querySelectorAll(".btn"); // select all buttons by class

    for (let i = 0; i < buttons.length; i++) // loop through all buttons in order to add event listener
    {
        buttons[i].addEventListener("click", function(event)
        {
            let buttonValue = parseInt(event.target.id) // assign the id in the html code to "buttonValue"

            switch(buttonValue) // use switch to choose the image
                {
                    case 1:
                        image = "angrywojack.png";
                        break;

                    case 2:
                        image = "veinkid.png";
                        break;

                    case 3:
                        image = "jordan.png";
                        break;

                    case 4:
                        image = "mr_incredible.png";
                        break;

                    case 5:
                        image = "donkey.png";
                        break;

                    case 6:
                        image = "oldman.png";
                        break;

                    case 7:
                        image = "smiling.png";
                        break;

                    case 8:
                        image = "noice.png";
                        break;

                    case 9:
                        image = "chrispratt.png";
                        break;

                    case 10:
                        image = "happycat.png";
                        break;
                }

                document.getElementById("responseImage").src = "images/survey_images/" + image // change src attribute to grab the correct image
        });
    };
});



