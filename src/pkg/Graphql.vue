<script>
export default {
  queryGraphql,
};

import $ from "jquery";
import Common from "@/components/Common";

function queryGraphql(query, variables = null) {
  var ret = null;
  $.ajax({
    type: "POST",
    async: false,
    url: Common.GRAPHQLURL,
    contentType: "application/json",
    accepts: {
      mycustomtype: "application/json",
    },
    data: JSON.stringify({
      query,
      variables: variables,
    }),
    success: function (data) {
      ret = data.data;
    },
    error: function (err) {
      console.log(err.status);
      console.log(err.responseText);
    },
  });
  return ret;
}
</script>