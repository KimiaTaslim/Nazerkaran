// document.addEventListener('DOMContentLoaded', function () {
//     var accordionItems = document.querySelectorAll('.accordion-item');
    
//     accordionItems.forEach(function (item) {
//         item.querySelector('.accordion-title').addEventListener('click', function () {
//             var content = item.querySelector('.accordion-content');
//             if (content.style.display === 'block') {
//                 content.style.display = 'none';
//                 item.classList.remove('active');
//             } else {
//                 accordionItems.forEach(function (i) {
//                     i.querySelector('.accordion-content').style.display = 'none';
//                     i.classList.remove('active');
//                 });
//                 content.style.display = 'block';
//                 item.classList.add('active');
//             }
//         });
//     });
// });


document.addEventListener('DOMContentLoaded', function () {
    var accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(function (item) {
        item.querySelector('.accordion-title').addEventListener('click', function () {
            var content = item.querySelector('.accordion-content');
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                item.classList.remove('active');
            } else {
                accordionItems.forEach(function (i) {
                    i.querySelector('.accordion-content').style.maxHeight = null;
                    i.classList.remove('active');
                });
                content.style.maxHeight = content.scrollHeight + '%';
                item.classList.add('active');
            }
        });
    });
});
