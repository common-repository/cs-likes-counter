( function( $ ) {
    $(document).ready(function(){
        $('.cs-like-post').on('click', function(e){
            e.preventDefault();
            var post_id = $(this).data('post');
            var value = 'like';

            var post = $.post(
                cslikes.ajaxurl, {
                    'action': 'set_like_post',
                    'vote': value,
                    'postID': post_id,
                    'nonce' : cslikes.nonce
                }
            );
            post.done( function( data ) {

                if ( data.success === false ) {

                    $.noticeAdd({
                        text: data.data.error_message,
                        stay: false,
                        type: 'error'
                    });

                } else {

                    // update karma
                    var karmaFieldId = '#cs-likes-dislikes-' + data.data.post_id + ' .like-count';
                    $( karmaFieldId ).text( data.data.html );
                    $.noticeAdd({
                        text: data.data.success_message,
                        stay: false,
                        type: 'success'
                    });

                }

                clicked = false;
            });

        });
        $('a.cs-dislike-post').on('click', function(e){
            e.preventDefault();
            var post_id = $(this).data('post');
            var value = 'dislike';

            var post = $.post(
                cslikes.ajaxurl, {
                    'action': 'set_dislike_post',
                    'vote': value,
                    'postID': post_id,
                    'nonce' : cslikes.nonce
                }
            );
            post.done( function( data ) {

                if ( data.success === false ) {

                    $.noticeAdd({
                        text: data.data.error_message,
                        stay: false,
                        type: 'error'
                    });

                } else {

                    // update karma
                    var karmaFieldId = '#cs-likes-dislikes-' + data.data.post_id + ' .dislike-count';
                    $( karmaFieldId ).text( data.data.html );
                    $.noticeAdd({
                        text: data.data.success_message,
                        stay: false,
                        type: 'success'
                    });

                }

                clicked = false;
            });

        });
    });
} )( jQuery );
