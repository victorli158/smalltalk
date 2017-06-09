# In consumers.py
import pdb
from channels import Channel, Group
from realtime.models import Connection
from channels.sessions import channel_session
from channels.auth import channel_session_user, channel_session_user_from_http

# Connected to websocket.connect
@channel_session_user_from_http
def ws_add(message):
    # Accept the connection
    #TODO ADD USER AUTHENTIXATION HERE
    # if request.user.is_authenticated:
    message.reply_channel.send({"accept": True})

    #get all chatrooms
    connections = Connection.objects.all()
    #see if there are any chatrooms that are open (only 1 user)
    for connection in connections:
        if connection.users.count():
            connection.users.add(message.user)
            Group(str(connection.pk)).add(message.reply_channel)
            return

    #if no open chats
    connection = Connection()
    connections.users.add(message.user)

# Connected to websocket.receive
@channel_session_user
def ws_message(message):
    Group("chat").send({
        "text": "[%s] %s" % (message.user.username, message.content['text']),
    })

# Connected to websocket.disconnect
@channel_session_user
def ws_disconnect(message):
    #TODO MAKE SURE TO CHECK IF THE SIZE OF GROUP IS EMPTY, IF SO DELETE GROUP
    Group("chat").discard(message.reply_channel)
