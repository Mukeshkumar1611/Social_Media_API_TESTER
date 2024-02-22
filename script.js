// start.js

async function makeApiRequest(event, requestType) {
    event.preventDefault();

    const apiEndpoint = document.getElementById('apiEndpoint').value; // url
    const apiMethod = document.getElementById('apiMethod').value; // type of request

    let userData;

    if (requestType === 'register') {
        userData = {
            'username': document.getElementById('registerUsername').value.trim(),
            'email': document.getElementById('registerEmail').value.trim(),
            'password': document.getElementById('registerPassword').value.trim()
        };
    } else if (requestType === 'login') {
        userData = {
            'email': document.getElementById('loginEmail').value.trim(),
            'password': document.getElementById('loginPassword').value.trim()
        };
    } else if (requestType === 'updateUser') {
        userData = {
            'userId': document.getElementById('userIdToUpdate').value.trim(),
            'password': document.getElementById('updatePassword').value.trim()
        };
    } else if (requestType === 'deleteUser') {
        userData = {
            'userId': document.getElementById('userIdToDelete').value.trim()
        };
    } else if (requestType === 'getUser') {

    } else if (requestType === 'followUser') {
        userData = {
            'userId': document.getElementById('currentUserIdFollow').value.trim()
        };
    } else if (requestType === 'unfollowUser') {
        userData = {
            'userId': document.getElementById('currentUserId').value.trim()
        };
    } else if (requestType === 'createPost') {
        userData = {
            'img': document.getElementById('createPostTitle').value.trim(),
            'desc': document.getElementById('createPostContent').value.trim(),
            'userId': document.getElementById('createPostUserId').value.trim(),
        };
    } else if (requestType === 'updatePost') {
        userData = {
            'desc': document.getElementById('updatePostContent').value.trim(),
            'userId': document.getElementById('updatePostId').value.trim(),
        };
    } else if (requestType === 'deletePost') {
        userData = {
            'userId': document.getElementById('deletePostId').value.trim(),
        };
    } else if (requestType === 'likePost') {
        userData = {
            'userId': document.getElementById('likePostId').value.trim(),
        };
    } else if (requestType === 'getPost') {

    }
    else if (requestType === 'timelinePost') {

    }
    else if (requestType === 'userPost') {

    }

    console.log(userData);

    try {
        // let apiData = userData.value; // Trim to remove leading/trailing white spaces

        try {
            apiData = userData; // Converted data into json format
        } catch (parseError) {
            console.error('Error parsing input as JSON:', parseError.message);
            // Handle parsing error as needed
        }

        const requestOptions = {
            method: apiMethod,
            headers: {
                'Content-Type': 'application/json',
            },

        };

        // Include body only if apiData is not empty
        if (apiData !== '') {
            requestOptions.body = JSON.stringify(apiData);
        }

        const response = await fetch(apiEndpoint, requestOptions);

        // if (!response.ok) {
        //     throw new Error(`HTTP error! Status: ${response.status}`);
        // }

        const responseData = await response.json();
        document.getElementById('responseOutput').textContent = JSON.stringify(responseData, null, 2);

        emptyFields();
    } catch (error) {
        console.error('Error during API request:', error.message);
    }
}

function showRegister() {
    document.getElementById('apiEndpoint').value = 'https://lime-concerned-bull.cyclic.app/api/auth/register';
    document.getElementById('apiMethod').selectedIndex = 1;
    hideAll();
    document.getElementById('modal-register').style.display = 'block';
}

function showLogin() {
    document.getElementById('apiEndpoint').value = 'https://lime-concerned-bull.cyclic.app/api/auth/login';
    document.getElementById('apiMethod').selectedIndex = 1;
    hideAll();
    document.getElementById('modal-login').style.display = 'block';
}

function showUpdateUser() {
    document.getElementById('apiEndpoint').value = 'https://lime-concerned-bull.cyclic.app/api/user/';
    document.getElementById('apiMethod').selectedIndex = 2;
    hideAll();
    document.getElementById('modal-update').style.display = 'block';
}

function showDeleteUser() {
    document.getElementById('apiEndpoint').value = 'https://lime-concerned-bull.cyclic.app/api/user/';
    document.getElementById('apiMethod').selectedIndex = 3;
    hideAll();
    document.getElementById('modal-delete').style.display = 'block';
}

function showGetUser() {
    document.getElementById('apiEndpoint').value = 'https://lime-concerned-bull.cyclic.app/api/user/';
    document.getElementById('apiMethod').selectedIndex = 0;
    hideAll();
    document.getElementById('modal-get').style.display = 'block';
}

function showFollowUser() {
    document.getElementById('apiEndpoint').value = 'https://lime-concerned-bull.cyclic.app/api/user/';
    document.getElementById('apiMethod').selectedIndex = 2;
    hideAll();
    document.getElementById('modal-follow').style.display = 'block';
}

function showUnfollowUser() {
    document.getElementById('apiEndpoint').value = 'https://lime-concerned-bull.cyclic.app/api/user/';
    document.getElementById('apiMethod').selectedIndex = 2;
    hideAll();
    document.getElementById('modal-unfollow').style.display = 'block';
}

function showCreatePost() {
    document.getElementById('apiEndpoint').value = 'https://lime-concerned-bull.cyclic.app/api/posts/';
    document.getElementById('apiMethod').selectedIndex = 1;
    hideAll();
    document.getElementById('modal-create-post').style.display = 'block';
}

function showUpdatePost() {
    document.getElementById('apiEndpoint').value = 'https://lime-concerned-bull.cyclic.app/api/posts/';
    document.getElementById('apiMethod').selectedIndex = 2;
    hideAll();
    document.getElementById('modal-update-post').style.display = 'block';
}

function showDeletePost() {
    document.getElementById('apiEndpoint').value = 'https://lime-concerned-bull.cyclic.app/api/posts/';
    document.getElementById('apiMethod').selectedIndex = 3;
    hideAll();
    document.getElementById('modal-delete-post').style.display = 'block';
}

function showLikePost() {
    document.getElementById('apiEndpoint').value = 'https://lime-concerned-bull.cyclic.app/api/posts/';
    document.getElementById('apiMethod').selectedIndex = 2;
    hideAll();
    document.getElementById('modal-like-post').style.display = 'block';
}

function showGetPost() {
    document.getElementById('apiEndpoint').value = 'https://lime-concerned-bull.cyclic.app/api/posts/';
    document.getElementById('apiMethod').selectedIndex = 0;
    hideAll();
    document.getElementById('modal-get-post').style.display = 'block';
}

function showGetTimelinePost() {
    document.getElementById('apiEndpoint').value = 'https://lime-concerned-bull.cyclic.app/api/posts/timeline/';
    document.getElementById('apiMethod').selectedIndex = 0;
    hideAll();
    document.getElementById('modal-get-timeline-post').style.display = 'block';
}

function showGetUserAllPost() {
    document.getElementById('apiEndpoint').value = 'https://lime-concerned-bull.cyclic.app/api/posts/profile/';
    document.getElementById('apiMethod').selectedIndex = 0;
    hideAll();
    document.getElementById('modal-get-all-post').style.display = 'block';
}

function emptyFields() {
    const elements = document.getElementsByClassName('clear');

    for (let i = 0; i < elements.length; i++) {
        elements[i].value = '';
    }
}

function hideAll() {
    const elements = document.getElementsByClassName('modal');

    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
    }
}