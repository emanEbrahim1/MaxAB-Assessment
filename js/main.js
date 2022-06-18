var spices = []

var spices_values = document.getElementById("spices-values");
var checkboxes = document.querySelectorAll('input[name="spices"]');

for (var checkbox of checkboxes) {
    checkbox.addEventListener('click', function () {
        if (this.checked === true) {
            spices.push(this.value)
        } else {
            spices.pop(this.value)
        }

        if (spices.length > 0) {
            spices_values.innerHTML = "<div class=\"row\">" +
                "<div class=\"col-12\">" +
                "<div class=\"row mt-5 mx-0\">" +
                "<p>" +
                "<i class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i>" +
                "</p> <img src=\"Public/spices_bag-removebg-preview 1.png\" width=\"100px\"> <p>" +
                "بهارات </p>" +
                "</div>" +
                "</div>" +
                "<div class=\"col-12\">" +
                "<div class=\"row\">" +
                spices.map(spiceItem => {
                    return (
                        "<div class=\"col-5 col-xl-4 itemBox\">" +
                        "<p>" +
                        spiceItem
                        + "</p>" +
                        "</div>"
                    )
                })
                +
                "</div>" +
                "</div>" +
                "</div>"


            var right = document.getElementById("right1");
            right.classList.remove("d-none")
        }
    })
}


var macarons = []

var macron_values = document.getElementById("macron-values");
var checkboxes1 = document.querySelectorAll('input[name="macro"]');

for (var checkbox1 of checkboxes1) {
    checkbox1.addEventListener('click', function () {
        if (this.checked === true) {
            macarons.push(this.value)
        } else {
            macarons.pop(this.value)
        }

        if (macarons.length > 0) {
           macron_values.innerHTML = "<div class=\"row\">" +
                "<div class=\"col-12\">" +
                "<div class=\"row mt-5 mx-0\">" +
                "<p>" +
                "<i class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i>" +
                "</p> <img src=\"Public/Macaroni bag 1.png\" width=\"100px\"> <p>" +
                "مكرونة </p>" +
                "</div>" +
                "</div>" +
                "<div class=\"col-12\">" +
                "<div class=\"row\">" +
                macarons.map(macaronsItem => {
                    return (
                        "<div class=\"col-5 col-xl-4 itemBox\">" +
                        "<p>" +
                        macaronsItem
                        + "</p>" +
                        "</div>"
                    )
                })
                +
                "</div>" +
                "</div>" +
                "</div>"


            var right = document.getElementById("right2");
            right.classList.remove("d-none")
        }
    })
}


var legumes = []

var legumes_values = document.getElementById("legumes-values");
var checkboxes2 = document.querySelectorAll('input[name="legumes"]');

for (var checkbox2 of checkboxes2) {
    checkbox2.addEventListener('click', function () {
        if (this.checked === true) {
            legumes.push(this.value)
        } else {
            legumes.pop(this.value)
        }

        if (legumes.length > 0) {
            legumes_values.innerHTML = "<div class=\"row\">" +
                "<div class=\"col-12\">" +
                "<div class=\"row mt-5 mx-0\">" +
                "<p>" +
                "<i class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i>" +
                "</p> <img src=\"Public/Macaroni bag 1.png\" width=\"100px\"> <p>" +
                "بقوليات </p>" +
                "</div>" +
                "</div>" +
                "<div class=\"col-12\">" +
                "<div class=\"row\">" +
                legumes.map(legumesItem => {
                    return (
                        "<div class=\"col-5 col-xl-4 itemBox\">" +
                        "<p>" +
                        legumesItem
                        + "</p>" +
                        "</div>"
                    )
                })
                +
                "</div>" +
                "</div>" +
                "</div>"


            var right = document.getElementById("right3");
            right.classList.remove("d-none")
        }
    })
}
