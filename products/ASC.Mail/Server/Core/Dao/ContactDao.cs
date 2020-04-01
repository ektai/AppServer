/*
 *
 * (c) Copyright Ascensio System Limited 2010-2018
 *
 * This program is freeware. You can redistribute it and/or modify it under the terms of the GNU 
 * General Public License (GPL) version 3 as published by the Free Software Foundation (https://www.gnu.org/copyleft/gpl.html). 
 * In accordance with Section 7(a) of the GNU GPL its Section 15 shall be amended to the effect that 
 * Ascensio System SIA expressly excludes the warranty of non-infringement of any third-party rights.
 *
 * THIS PROGRAM IS DISTRIBUTED WITHOUT ANY WARRANTY; WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR
 * FITNESS FOR A PARTICULAR PURPOSE. For more details, see GNU GPL at https://www.gnu.org/copyleft/gpl.html
 *
 * You can contact Ascensio System SIA by email at sales@onlyoffice.com
 *
 * The interactive user interfaces in modified source and object code versions of ONLYOFFICE must display 
 * Appropriate Legal Notices, as required under Section 5 of the GNU GPL version 3.
 *
 * Pursuant to Section 7 § 3(b) of the GNU GPL you must retain the original ONLYOFFICE logo which contains 
 * relevant author attributions when distributing the software. If the display of the logo in its graphic 
 * form is not reasonably feasible for technical reasons, you must include the words "Powered by ONLYOFFICE" 
 * in every copy of the program you distribute. 
 * Pursuant to Section 7 § 3(e) we decline to grant you any rights under trademark law for use of our trademarks.
 *
*/


using ASC.Api.Core;
using ASC.Common;
using ASC.Core;
using ASC.Core.Common.EF;
using ASC.Mail.Core.Dao.Entities;
using ASC.Mail.Core.Dao.Interfaces;
using ASC.Mail.Core.Entities;
using System.Collections.Generic;
using System.Linq;

namespace ASC.Mail.Core.Dao
{
    public class ContactDao : BaseDao, IContactDao
    {
        public ContactDao(ApiContext apiContext,
            SecurityContext securityContext,
            DbContextManager<MailDbContext> dbContext)
            : base(apiContext, securityContext, dbContext)
        {
        }

        public int SaveContact(Contact contact)
        {
            var mailContact = new MailContacts
            {
                Id = (uint)contact.Id,
                IdUser = contact.User,
                Tenant = contact.Tenant,
                Name = contact.ContactName,
                Address = contact.Address,
                Description = contact.Description,
                Type = (int)contact.Type,
                HasPhoto = contact.HasPhoto
            };

           var entity = MailDb.AddOrUpdate(t => t.MailContacts, mailContact);

            MailDb.SaveChanges();

            return (int)entity.Id;
        }

        public int RemoveContacts(List<int> ids)
        {
            var queryDelete = MailDb.MailContactInfo
                .Where(c => c.Tenant == Tenant 
                    && c.IdUser == UserId 
                    && ids.Contains((int)c.IdContact));

            MailDb.MailContactInfo.RemoveRange(queryDelete);

            var result = MailDb.SaveChanges();

            return result;
        }
    }

    public static class ContactDaoExtension
    {
        public static DIHelper AddContactDaoService(this DIHelper services)
        {
            services.TryAddScoped<ContactDao>();

            return services;
        }
    }
}