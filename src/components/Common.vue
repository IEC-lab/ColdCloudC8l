<script>
    const APIURL = "/api"
    const STREAMSURL = APIURL + "/streams"
    const GRAPHQLURL = APIURL + "/graphql/query"
    // const COLDBRIDGEURL = "ws://coldbridge-service.coldworld:8888/rtsp/1/"
    const COLDBRIDGEURL = "ws://192.168.1.4:8888/rtsp/1/"
    // const STRUCTEDMSGSWSURL = "ws://coldmountain-service.coldworld:8899/api/getStructedMsgs"
    const STRUCTEDMSGSWSURL = "ws://192.168.1.4:8899/api/getStructedMsgs"
    export default {
        APIURL,
        STREAMSURL,
        GRAPHQLURL,
        COLDBRIDGEURL,
        STRUCTEDMSGSWSURL
    }
</script>