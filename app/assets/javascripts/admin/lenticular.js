//= require jquery-ui/sortable

(function(){

  var lenticulars_table_el,
    datable_tbody_el;

  function fixHelperModified(e, tr) {
      var $originals = tr.children();
      var $helper = tr.clone();
      $helper.children().each(function(index) {
          $(this).width($originals.eq(index).width())
      });
      return $helper;
  }

  function updateIndex(e, ui) {

    // console.log(e, ui);

    var position_array = [],
      lenticulars_nodelist = lenticulars_tbody.children;

    for(var i=0; i < lenticulars_nodelist.length; i++) {
      position_array.push({
        id: lenticulars_nodelist.item(i).dataset.id,
        position: i
      });
    }

    // console.log(position_array);


    $.ajax({
      type: 'put',
      data: { lenticulars: position_array },
      dataType: 'script',
      url: '/admin/lenticulars/sort',
      success: function() {
        $(document).trigger('sortables:updated')
      }
    });


  }

  $(function(){


    if(window.location.pathname ==="/admin/lenticulars") {

      lenticulars_table_el = document.querySelector('#lenticulars'),
      lenticulars_tbody = lenticulars_table_el.querySelector('tbody');

      var form_el =  document.querySelector('form');

      $(lenticulars_table_el).find('tbody').sortable({
        handle: '.handle',
        axis: "y",
        helper: fixHelperModified,
        forceHelperSize: true,
        forcePlaceholderSize: true,
        update: updateIndex
      });

      $(form_el).on('change', 'input[type="radio"]', function(event){
        console.log($(form_el).serializeArray());
      });



    }


  });



}).call();