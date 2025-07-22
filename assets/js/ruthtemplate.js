/*

Designed By RUTH

https://ruthbaiby.github.io

*/

'use strict';
$(document).ready(function() {

    // Accordion
    var all_panels = $('.templatemo-accordion > li > ul').hide();

    $('.templatemo-accordion > li > a').click(function() {
        console.log('Hello world!');
        var target =  $(this).next();
        if(!target.hasClass('active')){
            all_panels.removeClass('active').slideUp();
            target.addClass('active').slideDown();
        }
      return false;
    });
    // End accordion

    // Product detail
    $('.product-links-wap a').click(function(){
      var this_src = $(this).children('img').attr('src');
      $('#product-detail').attr('src',this_src);
      return false;
    });
    $('#btn-minus').click(function(){
      var val = $("#var-value").html();
      val = (val=='1')?val:val-1;
      $("#var-value").html(val);
      $("#product-quanity").val(val);
      return false;
    });
    $('#btn-plus').click(function(){
      var val = $("#var-value").html();
      val++;
      $("#var-value").html(val);
      $("#product-quanity").val(val);
      return false;
    });
    $('.btn-size').click(function(){
      var this_val = $(this).html();
      $("#product-size").val(this_val);
      $(".btn-size").removeClass('btn-secondary');
      $(".btn-size").addClass('btn-success');
      $(this).removeClass('btn-success');
      $(this).addClass('btn-secondary');
      return false;
    });
    // End roduct detail
// Pagination for product cards (dynamic)
const productsPerPage = 6;
const products = $(".product-wap").parent(); // .col-md-4 wrappers
const totalProducts = products.length;
const totalPages = Math.ceil(totalProducts / productsPerPage);

// Generate pagination links dynamically
const paginationContainer = $(".pagination");
paginationContainer.empty(); // Clear any existing links

for (let i = 1; i <= totalPages; i++) {
    const activeClass = i === 1 ? "active" : "";
    paginationContainer.append(`
        <li class="page-item ${activeClass}">
            <a class="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark" 
               href="#" data-page="${i}">${i}</a>
        </li>
    `);
}

function showPage(page) {
    products.hide();
    const start = (page - 1) * productsPerPage;
    const end = start + productsPerPage;
    products.slice(start, end).show();

    $(".pagination .page-item").removeClass("active");
    $(`.pagination .page-link[data-page="${page}"]`).parent().addClass("active");
}

// Click handler
$(document).on("click", ".pagination .page-link", function(e) {
    e.preventDefault();
    const page = parseInt($(this).data("page"));
    showPage(page);
});

// Show first page on load
showPage(1);

});

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('inputMobileSearch');
    const searchTrigger = document.getElementById('searchTrigger');

    if (searchTrigger && searchInput) {
        searchTrigger.addEventListener('click', function (e) {
            e.preventDefault(); // prevent default anchor behavior
            const keyword = searchInput.value.trim();
            if (keyword) {
                // Redirect to shop.html with search query
                window.location.href = `shop.html?search=${encodeURIComponent(keyword)}`;
            }
        });
    }
});
