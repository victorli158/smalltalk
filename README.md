# Small Talk

[Demo Page](https://www.google.com)

![logo](http://res.cloudinary.com/dqr2mejhc/image/upload/c_scale,w_240/v1497230719/icon_a2orqx.png)

Small Talk is mobile video chat application that allows users to connect to other users via common subjects. With our filtered categories, our goal at Small Talk is to allow strangers to bond over similar interests.

## Technologies Used

The backend API was built using Python's Django framework while being connected to the frontend using React Native.

## Features


#### WebRTC

LOREM IPSUM MAMA

#### Django Channels

In order to implement WebRTC, it was necessary to set up a signaling server so that two
users could establish a peer to peer connection. This involved implementing Django Channels, which
handles WebSocket connections. Redis was used for the channel layer, and s Daphne interface server was used in order to support both HTTP and WebSocket requests. Additional single-threaded worker servers were also set up in order to speed up response time and prevent hanging.

Upon the initial handshake, users are dynamically placed into chatrooms with each other (with a maximum of two users per chatroom).  A "connection" model was created to store these chatrooms in the database to maintain a reference to each chat and each user in the chat (via foreign keys). Because only the initial request resembles HTTP, and the reference to current user lives in the cookies sent over HTTP, it was necessary to extract a reference to current user upon this initial handshake to associate it with the WebSocket reply channel. When a second user enters a chat, a message is sent to the group to begin Peer to Peer negotiations, after which the channel simply relays messages between the two users to mediate WebRTC negotiations until a connection is established. When a chatroom becomes empty, it is destroyed.


## Future Implementations

#### Friendships
The friendships feature would allow users to add each other as friends if
they would like to call each other for future chat sessions.
