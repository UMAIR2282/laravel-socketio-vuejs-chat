<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">{{pageTitle}}</div>

                    <div class="card-body">
                        <div v-if="sessionStatus" class="alert alert-success" role="alert">
                            {{sessionStatus}}
                        </div>

                        {{pageMessage}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["title", "sessionStatus", "message"],
        data: function(){
            return{
                pageTitle: this.title,
                pageMessage: this.message,
                socket: null
            }
        },
        mounted() {
            this.socket = io.connect(CHAT_SERVER_URL);
            this.socket.on('connected', function(){
                console.log("CONNECTED");
            })
            this.socket.on('disconnected', function(){
                console.log("DISCONNECTED");
            })
            this.socket.emit('broadcast-chat', 'Emitting Chat');
            this.socket.on('broadcast-chat-receieved', function(event){
                console.log('Broadcast Chat Event Received :: ', event);
            });
        }
    }
</script>
