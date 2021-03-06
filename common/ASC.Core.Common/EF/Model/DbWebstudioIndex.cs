﻿using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ASC.Core.Common.EF.Model
{
    [Table("webstudio_index")]
    public class DbWebstudioIndex
    {
        [Key]
        [Column("index_name")]
        public string IndexName { get; set; }

        [Column("last_modified")]
        public DateTime LastModified { get; set; }
    }
}
