using System;
using System.Collections.Generic;

namespace QuanLyRapChieuPhim.Models;

public partial class Phim
{
    public int IdPhim { get; set; }

    public string? TenPhim { get; set; }

    public string? NhaSanXuat { get; set; }

    public int? NamSx { get; set; }

    public string? NuocSx { get; set; }

    public string? TheLoai { get; set; }

    public string? ThoiLuong { get; set; }

    public string? MoTa { get; set; }

    public string? HinhAnh { get; set; }

    public string? Url { get; set; }

    public virtual ICollection<LichChieuPhim> LichChieuPhims { get; set; } = new List<LichChieuPhim>();
}
