using M9PVND_Hajo.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace M9PVND_Hajo.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    public class Boatkontroller : ControllerBase
    {
        [HttpGet]
        [Route("questions/count")]

        public int M1()
        {
            HajosContext hajosContext = new HajosContext();
            int kerdesekszam = hajosContext.Questions.Count();
            return kerdesekszam;
        }



        [HttpGet]
        [Route("questions/{sorszám}")]
        public ActionResult M2(int sorszám)
        {
            HajosContext context = new HajosContext();
            var kérdés = (from x in context.Questions
                          where x.QuestionId == sorszám
                          select x).FirstOrDefault();

            if (kérdés == null) return BadRequest("Nincs ilyen sorszámú kérdés");

            return new JsonResult(kérdés);
        }


    }
}
