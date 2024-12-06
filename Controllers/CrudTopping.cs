using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QuanLyRapChieuPhim.Models;

namespace QuanLyRapChieuPhim.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CrudTopping : ControllerBase
    {
        [HttpGet]
        public IActionResult GetAllTopping()
        {
            try
            {
                using (var dbcontext = new QuanLyRapChieuPhimContext())
                {
                    return Ok(dbcontext.Toppings.ToList());
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public IActionResult AddTopping(string TenTp, int Gia, string HinhAnh)
        {
            try
            {
                using (var dbcontext = new QuanLyRapChieuPhimContext())
                {
                    Topping tp = new Topping()
                    {
                        TenTp = TenTp,
                        Gia = Gia,
                        HinhAnh = HinhAnh
                    };                  
                    dbcontext.Add(tp);
                    dbcontext.SaveChanges();
                    return Ok(dbcontext.Toppings.ToList());
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete]
        public IActionResult DeleteTopping(int id)
        {
            try
            {
                using (var dbcontext = new QuanLyRapChieuPhimContext())
                {
                    Topping tp = dbcontext.Toppings.Find(id);
                    dbcontext.Remove(tp);
                    dbcontext.SaveChanges();
                    return Ok(dbcontext.Toppings.ToList());
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        public IActionResult UpdateTopping(int id, string TenTp, int Gia, string HinhAnh)
        {
            try
            {
                using (var dbcontext = new QuanLyRapChieuPhimContext())
                {
                    Topping tp = dbcontext.Toppings.Find(id);
                    tp.TenTp =  TenTp;
                    tp.Gia = Gia;
                    tp.HinhAnh = HinhAnh;
                    dbcontext.SaveChanges();
                    return Ok(dbcontext.Toppings.ToList());
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
