using System.Web.Http;
using System.Web.Http.Results;

namespace Dressing.App.Controllers
{
    [Route("api/item")]
    public class ItemController : ApiController
    {
        public IHttpActionResult Post(CreateItemCommand command)
        {
            return Ok();
        }
    }

    public class CreateItemCommand
    {
        public string Name { get; set; }
        public string Type { get; set; }
        public string Description { get; set; }
    }
}