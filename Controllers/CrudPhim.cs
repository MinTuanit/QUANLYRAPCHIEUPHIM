using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QuanLyRapChieuPhim.Models;

namespace QuanLyRapChieuPhim.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CrudPhim : ControllerBase
    {
        [HttpGet]
        public IActionResult GetAllPhim()
        {
            try
            {
                using (var dbcontext = new QuanLyRapChieuPhimContext())
                {
                    return Ok(dbcontext.Phims.ToList());
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult GetPhimById(int id)
        {
            try
            {
                using (var dbcontext = new QuanLyRapChieuPhimContext())
                {
                    return Ok(dbcontext.Phims.Find(id));
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public IActionResult AddPhim(string TenPhim, string NhaSanXuat, int NamSanXuat,string NuocSanXuat,
            string TheLoai, string ThoiLuong, string MoTa, string HinhAnh, string Url)
        {
            try
            {
                using (var dbcontext = new QuanLyRapChieuPhimContext())
                {
                    Phim phim = new Phim()
                    {
                        TenPhim = TenPhim,
                        NhaSanXuat = NhaSanXuat,
                        NamSx = NamSanXuat,
                        NuocSx = NuocSanXuat,
                        TheLoai = TheLoai,
                        ThoiLuong = ThoiLuong,
                        MoTa = MoTa,
                        HinhAnh = HinhAnh,
                        Url = Url
                    };                 
                    dbcontext.Add(phim);
                    dbcontext.SaveChanges();
                    return Ok(dbcontext.Phims.ToList());
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete]
        public IActionResult DeletePhim(int id)
        {
            try
            {
                using (var dbcontext = new QuanLyRapChieuPhimContext())
                {
                    Phim phim = dbcontext.Phims.Find(id);
                    dbcontext.Remove(phim);
                    dbcontext.SaveChanges();
                    return Ok(dbcontext.Phims.ToList());
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        public IActionResult UpdatePhim(int id, string TenPhim, string NhaSanXuat, int NamSanXuat, string NuocSanXuat,
            string TheLoai, string ThoiLuong, string MoTa, string HinhAnh, string Url)
        {
            try
            {
                using (var dbcontext = new QuanLyRapChieuPhimContext())
                {
                    Phim phim = dbcontext.Phims.Find(id);
                    phim.TenPhim = TenPhim;
                    phim.NhaSanXuat = NhaSanXuat;
                    phim.NamSx = NamSanXuat;
                    phim.NuocSx =   NuocSanXuat;
                    phim.TheLoai = TheLoai;
                    phim.ThoiLuong = ThoiLuong;
                    phim.MoTa = MoTa;
                    phim.HinhAnh = HinhAnh;
                    phim.Url = Url;
                    dbcontext.SaveChanges();
                    return Ok(dbcontext.Phims.ToList());
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}

