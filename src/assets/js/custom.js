export function TriggerLight(){
    if($('.lightgallery').length > 0 &&  $('.lightgallery.firstLoad').length > 0 ){
        $(".lightgallery").lightGallery(); 
        $(".lightgallery").removeClass('firstLoad');
        console.log('wow');
    }
}

export function addGalleryClass(){

      //  $(".lightgallery").addClass('firstLoad');
     //   console.log('add');
   
}