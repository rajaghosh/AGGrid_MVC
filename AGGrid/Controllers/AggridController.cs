using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace AGGrid.Controllers
{
    public class AggridController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Aggrid2()
        {
            return View();
        }
    }
}