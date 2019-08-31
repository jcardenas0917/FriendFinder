// Capture the form inputs
$("#submit").on("click", function (event) {
    event.preventDefault();
    // Create an object with all the answers and information
    var answers = {
        name: $("#name").val(),
        photo: $("#photo").val(),
        scores: [
            $("#q1").val(),
            $("#q2").val(),
            $("#q3").val(),
            $("#q4").val(),
            $("#q5").val(),
            $("#q6").val(),
            $("#q7").val(),
            $("#q8").val(),
            $("#q9").val(),
            $("#q10").val()
        ]
    };
    let isValid = true;
    answers.scores.forEach((value, i) => {
        if (answers.scores[i] === "") {
            isValid = false;
        }
    });
    if (answers.name === "" || answers.photo === "") {
        isValid = false;
    }
    if (isValid) {
        // Post to API
        $.post("/api/friends", answers, data => {
            console.log(data)
            
            $("#match-name").text(data.name);
            $("#match-img").attr("src", data.photo);

            // Show result
            $("#results-modal").modal("toggle");
        })
        alert("Good Job")
    } else {
        alert("Please answer all questions");
    }

});
