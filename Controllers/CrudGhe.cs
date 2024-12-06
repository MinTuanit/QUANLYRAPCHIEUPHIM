using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QuanLyRapChieuPhim.Models;

namespace QuanLyRapChieuPhim.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CrudGhe : ControllerBase
    {
        [HttpGet]
        public IActionResult GetAllGhe()
        {
            try
            {
                using (var dbcontext = new QuanLyRapChieuPhimContext())
                {
                    return Ok(dbcontext.Ghes.ToList());
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("{idPhong}")]
        public IActionResult GetAllGheInPhongById(int idPhong)
        {
            try
            {
                using (var dbcontext = new QuanLyRapChieuPhimContext())
                {
                    return Ok(dbcontext.Ghes.Where(x=>x.IdPhong==idPhong).ToList());
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public IActionResult AddGhe(string TenGhe, int idPhong)
        {
            try
            {
                using (var dbcontext = new QuanLyRapChieuPhimContext())
                {
                    Ghe ghe = new Ghe()
                    {
                        TenGhe = TenGhe,
                        IdPhong = idPhong,                        
                    };
                    dbcontext.Add(ghe);
                    dbcontext.SaveChanges();
                    return Ok(dbcontext.Ghes.ToList());
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete]
        public IActionResult DeleteGhe(int id)
        {
            try
            {
                using (var dbcontext = new QuanLyRapChieuPhimContext())
                {
                    Ghe ghe = dbcontext.Ghes.Find(id);
                    dbcontext.Remove(ghe);
                    dbcontext.SaveChanges();
                    return Ok(dbcontext.Ghes.ToList());
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        public IActionResult UpdateGhe(int id, string TenGhe, int idPhong)
        {
            try
            {
                using (var dbcontext = new QuanLyRapChieuPhimContext())
                {
                    Ghe ghe = dbcontext.Ghes.Find(id);
                    ghe.TenGhe = TenGhe;
                    ghe.IdPhong = idPhong;            
                    dbcontext.SaveChanges();
                    return Ok(dbcontext.Ghes.ToList());
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
