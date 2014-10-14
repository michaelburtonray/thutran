//= require jquery-ui/sortable

(function(){

  var lenticulars_table_el,
    datable_tbody_el,
    form_el;

  $(function(){


    if(window.location.pathname ==="/admin/lenticulars") {

      lenticulars_table_el = document.querySelector('#lenticulars'),
      lenticulars_tbody = lenticulars_table_el.querySelector('tbody');

      form_el =  document.querySelector('form');

      $(lenticulars_table_el).find('tbody').sortable({
        handle: '.handle',
        axis: "y",
        helper: fixHelperModified,
        forceHelperSize: true,
        forcePlaceholderSize: true,
        update: updateIndex
      });

      $(form_el).on('change', 'input[name="background_config[value]"]', putBackground);
      $(form_el).on('change', 'input[name="lense_config[value]"]', putLense);

      // $(form_el).on('change', 'input[type="radio"]', putLense);


      $(document).on('ajaxStart', ajaxStart);
      $(document).on('ajaxSend', ajaxSend);
      $(document).on('ajaxSuccess', ajaxSuccess);
      $(document).on('ajaxError', ajaxError);
      $(document).on('ajaxComplete', ajaxComplete);



    }
  });


  function putBackground(event) {
    console.log($(this).serialize());

    $.ajax({
      type: 'put',
      data: $(this).serialize(),
      url: '/admin/lenticulars/put-background',
      success: function(a,b,c) {
        console
        console.log('ajax success');
      }
    });
  }

  function putLense(event) {
    console.log($(this).serializeArray());

    $.ajax({
      type: 'put',
      data: $(this).serialize(),
      url: '/admin/lenticulars/put-lense',
      success: function(a,b,c) {
        console
        console.log('ajax success');
      }
    });
  }


  function fixHelperModified(e, tr) {
      var $originals = tr.children();
      var $helper = tr.clone();
      $helper.children().each(function(index) {
          $(this).width($originals.eq(index).width())
      });
      return $helper;
  }

  function updateIndex(e, ui) {

    var position_array = [],
      lenticulars_nodelist = lenticulars_tbody.children;

    for(var i=0; i < lenticulars_nodelist.length; i++) {
      position_array.push({
        id: lenticulars_nodelist.item(i).dataset.id,
        position: i
      });
    }


    $.ajax({
      type: 'put',
      data: { lenticulars: position_array },
      url: '/admin/lenticulars/sort',
      success: function() {
        $(document).trigger('sortables:updated')
      }
    });
  }


  function ajaxStart() {
    console.log('ajaxStart');
  }
  function ajaxSend() {
    console.log('ajaxSend');
  }
  function ajaxSuccess() {
    console.log('ajaxSuccess');
  }
  function ajaxError() {
    console.log('ajaxError');
  }
  function ajaxComplete() {
    console.log('ajaxComplete');
  }


}).call();