using System;
using System.Collections.Generic;

namespace QuanLyRapChieuPhim.Models;

public partial class KhachHang
{
    public int IdKh { get; set; }

    public string? TenKh { get; set; }

    public string? GioiTinh { get; set; }

    public DateOnly? NgaySinh { get; set; }

    public string? SoDienThoai { get; set; }

    public int? IdTk { get; set; }

    public virtual ICollection<HoaDon> HoaDons { get; set; } = new List<HoaDon>();

    public virtual TaiKhoan? IdTkNavigation { get; set; }
}
