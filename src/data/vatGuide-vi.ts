import { VATGuideContent } from "./vatGuideTranslations";

export const guideVI: VATGuideContent = {
  badge: "Hướng Dẫn Thuế GTGT Toàn Diện 2025-2026",
  title: "Hướng Dẫn Đầy Đủ về Tính Thuế Giá Trị Gia Tăng Quốc Tế",
  subtitle: "Tất cả những gì bạn cần biết về tính thuế GTGT cho cửa hàng trực tuyến, freelancer, doanh nghiệp SaaS và thương mại quốc tế — cập nhật, đáng tin cậy và dựa trên kinh nghiệm thực tiễn.",
  sections: {
    s1Title: "Thuế GTGT là gì và tại sao việc tính toán chính xác lại quan trọng?",
    s1P1: "Thuế GTGT (Thuế Giá Trị Gia Tăng) là loại thuế tiêu dùng được áp dụng trên hàng hóa và dịch vụ tại hơn 170 quốc gia trên thế giới. Trong tiếng Anh gọi là VAT (Value Added Tax), trong khi một số quốc gia sử dụng thuật ngữ GST (Goods and Services Tax). Mặc dù tên gọi khác nhau, hệ thống cơ bản vẫn giống nhau: thuế được cộng thêm ở mỗi khâu của chuỗi sản xuất và phân phối.",
    s1P2: "Đối với doanh nhân, freelancer và doanh nghiệp hoạt động quốc tế, việc tính thuế GTGT chính xác không chỉ là nghĩa vụ pháp lý mà còn là nhu cầu chiến lược. Sai sót trong tính toán VAT có thể dẫn đến truy thu thuế, phạt và các vấn đề hành chính với cơ quan thuế ở nhiều quốc gia. Công cụ tính VAT quốc tế miễn phí của chúng tôi giúp bạn tránh những rủi ro này bằng cách cung cấp các phép tính chính xác dựa trên mức thuế suất mới nhất.",
    s1P3: "Dù bạn điều hành cửa hàng trực tuyến giao hàng cho khách hàng khắp châu Âu, cung cấp nền tảng SaaS cho người dùng toàn cầu, hay là freelancer cung cấp dịch vụ cho khách hàng quốc tế — việc áp dụng đúng thuế suất VAT là nền tảng cho hoạt động kinh doanh lành mạnh. Hướng dẫn này giúp bạn hiểu rõ sự phức tạp của VAT quốc tế và cung cấp các hướng dẫn thực tế để tránh sai sót.",

    s2Title: "Hệ thống thuế GTGT hoạt động như thế nào trên toàn thế giới?",
    s2P1: "Hệ thống VAT độc đáo vì nó được thu ở mọi khâu trong chuỗi giá trị. Nhà sản xuất trả VAT cho nguyên liệu thô, thêm giá trị vào sản phẩm và tính VAT cho nhà bán buôn. Nhà bán buôn làm tương tự với nhà bán lẻ, và nhà bán lẻ cuối cùng tính VAT cho người tiêu dùng. Ở mỗi khâu, VAT đã trả trước đó (thuế đầu vào) có thể được khấu trừ, do đó chỉ người tiêu dùng cuối cùng mới chịu toàn bộ gánh nặng thuế.",
    s2P2: "Hệ thống này khác biệt cơ bản so với thuế bán hàng (sales tax) đơn giản, như được áp dụng ở một số bang của Mỹ. Với sales tax, thuế chỉ được thu một lần khi bán cho người tiêu dùng cuối cùng. Hệ thống VAT mang lại tính minh bạch cao hơn và ngăn ngừa thuế chồng thuế, vì vậy nó đã được hầu hết các quốc gia trên thế giới áp dụng.",
    s2FormulaTitle: "Tính VAT: Các công thức cơ bản",
    s2FormulaAdd: "Cộng VAT (chưa bao gồm → đã bao gồm):",
    s2FormulaAddDesc: "Số tiền đã bao gồm VAT = Số tiền chưa bao gồm VAT × (1 + Thuế suất VAT / 100)",
    s2FormulaRemove: "Tách VAT (đã bao gồm → chưa bao gồm):",
    s2FormulaRemoveDesc: "Số tiền chưa bao gồm VAT = Số tiền đã bao gồm VAT ÷ (1 + Thuế suất VAT / 100)",
    s2FormulaTip: "Mẹo: Sử dụng công cụ tính của chúng tôi ở trên để thực hiện các phép tính này tự động và chính xác cho mọi quốc gia.",
    s2P3: "Điều quan trọng cần biết là hầu hết mọi quốc gia đều áp dụng nhiều mức thuế suất VAT. Ngoài thuế suất tiêu chuẩn, còn có thuế suất ưu đãi cho hàng hóa thiết yếu như thực phẩm, thuốc, sách và dịch vụ văn hóa. Một số quốc gia thậm chí áp dụng thuế suất 0% hoặc miễn thuế cho các danh mục cụ thể. Công cụ tính của chúng tôi tự động hiển thị tất cả các thuế suất có sẵn khi bạn chọn một quốc gia.",

    s3Title: "Tính VAT cho thương mại điện tử, cửa hàng trực tuyến và bán hàng online",
    s3P1: "Lĩnh vực thương mại điện tử là một trong những lĩnh vực phức tạp nhất về tính toán VAT. Người bán trực tuyến phải tính đến quốc gia của người mua, loại sản phẩm hoặc dịch vụ, và liệu khách hàng là cá nhân (B2C) hay doanh nghiệp (B2B). Trong Liên minh Châu Âu, từ tháng 7 năm 2021, hệ thống One Stop Shop (OSS) cho phép nộp VAT cho tất cả các nước EU thông qua một tờ khai duy nhất.",
    s3P2: "Đối với cửa hàng trực tuyến bán hàng hóa vật lý cho người tiêu dùng ở các nước EU khác, phải áp dụng thuế suất VAT của nước khách hàng khi tổng doanh thu bán cho người tiêu dùng EU vượt quá 10.000 euro mỗi năm. Điều này có nghĩa là cửa hàng trực tuyến Việt Nam bán cho người tiêu dùng Đức phải tính và nộp VAT theo thuế suất của Đức — điều mà công cụ tính của chúng tôi giúp bạn thực hiện nhanh chóng và chính xác.",
    s3P3: "Đối với giao dịch B2B trong EU, thường áp dụng cơ chế chuyển nghĩa vụ thuế (reverse charge). Điều này có nghĩa là nhà cung cấp xuất hóa đơn không có VAT và người mua tự kê khai và khấu trừ VAT tại nước mình. Điều này đơn giản hóa đáng kể công tác hành chính, nhưng cả hai bên phải có mã số VAT hợp lệ có thể xác minh qua hệ thống VIES.",
    s3PhysicalTitle: "Hàng hóa vật lý",
    s3PhysicalDesc: "VAT được tính dựa trên nước giao hàng. Khi giao hàng đến các nước EU khác, áp dụng thuế suất địa phương cho bán hàng B2C vượt ngưỡng. Đối với xuất khẩu ngoài EU, áp dụng thuế suất 0%.",
    s3DigitalTitle: "Sản phẩm và dịch vụ số",
    s3DigitalDesc: "Đối với sản phẩm và dịch vụ số bán cho cá nhân, áp dụng thuế suất VAT của nước khách hàng, bất kể người bán ở đâu. Bao gồm phần mềm, sách điện tử, khóa học trực tuyến, dịch vụ streaming và sản phẩm SaaS.",
    s3P4: "Dropshipping là một điểm đặc biệt cần chú ý. Với tư cách là dropshipper, bạn là người bán theo luật, ngay cả khi bạn chưa bao giờ cầm hàng thực tế. Điều này có nghĩa là bạn chịu trách nhiệm tính toán và nộp VAT chính xác. Đối với nhập khẩu từ ngoài EU, bạn phải tính đến VAT nhập khẩu và thuế hải quan. Công cụ tính của chúng tôi giúp bạn xác định số tiền VAT chính xác, bất kể mô hình kinh doanh phức tạp đến đâu.",

    s4Title: "Tính VAT cho freelancer và nhà cung cấp dịch vụ",
    s4P1: "Là freelancer làm việc quốc tế, điều quan trọng là phải hiểu khi nào bạn cần tính VAT và áp dụng thuế suất nào. Quy tắc cơ bản rất đơn giản: đối với dịch vụ cung cấp cho doanh nghiệp (B2B) trong EU, áp dụng cơ chế reverse charge, nghĩa là bạn xuất hóa đơn không có VAT và người mua tự kê khai VAT. Đối với dịch vụ cho cá nhân (B2C), thường áp dụng thuế suất VAT của nước bạn đặt trụ sở.",
    s4P2: "Tuy nhiên, có những ngoại lệ quan trọng. Dịch vụ cung cấp điện tử cho cá nhân ở các nước EU khác thuộc phạm vi quy định OSS, áp dụng thuế suất VAT của nước người tiêu dùng. Bao gồm thiết kế web, lập trình, tư vấn trực tuyến và các dịch vụ số khác. Công cụ tính của chúng tôi giúp bạn nhanh chóng tìm thuế suất chính xác cho nước của khách hàng.",
    s4P3: "Để lập hóa đơn và báo giá chính xác, cần biết số tiền VAT phải tính. Hóa đơn cho khách hàng doanh nghiệp ở Đức khác với hóa đơn cho khách hàng cá nhân ở Ý về mặt VAT. Sử dụng công cụ tính của chúng tôi để tính chính xác số tiền VAT và luôn ghi rõ thuế suất VAT, số tiền VAT, tổng số tiền bao gồm và chưa bao gồm VAT trên hóa đơn.",
    s4P4: "Ở nhiều quốc gia, freelancer có doanh thu hàng năm dưới ngưỡng nhất định có thể sử dụng chế độ miễn thuế cho doanh nghiệp nhỏ, được miễn nộp VAT nhưng cũng không được khấu trừ VAT. Các chế độ tương tự tồn tại ở nhiều quốc gia. Hãy cân nhắc kỹ xem chế độ này có lợi cho tình huống của bạn không, đặc biệt nếu bạn có nhiều chi phí kinh doanh mà bạn muốn được hoàn thuế VAT.",

    s5Title: "Tính VAT cho SaaS, phần mềm và đăng ký số",
    s5P1: "SaaS (Phần mềm dưới dạng Dịch vụ) và đăng ký số là phân khúc đang phát triển với các quy tắc VAT cụ thể. Khi bạn là nhà cung cấp SaaS cung cấp dịch vụ cho người tiêu dùng trong EU, bạn phải áp dụng thuế suất VAT của nước khách hàng. Điều này áp dụng cho tất cả dịch vụ cung cấp điện tử, bao gồm phần mềm đám mây, nền tảng streaming, công cụ trực tuyến và trang web thành viên.",
    s5P2: "Việc xác định vị trí của khách hàng (\"nơi cung cấp dịch vụ\") rất quan trọng và được xác định dựa trên hai bằng chứng độc lập, như địa chỉ hóa đơn, địa chỉ IP, thông tin ngân hàng hoặc số điện thoại. Doanh nghiệp SaaS phải triển khai hệ thống tự động ghi nhận thông tin này để tuân thủ nghĩa vụ VAT.",
    s5P3: "Đối với bán hàng B2B cho doanh nghiệp ngoài nước bạn nhưng trong EU, áp dụng cơ chế reverse charge nếu người mua có mã số VAT hợp lệ. Đối với bán hàng cho doanh nghiệp hoặc người tiêu dùng ngoài EU, dịch vụ thường không chịu VAT tại EU, nhưng bạn phải tính đến nghĩa vụ thuế địa phương tại nước khách hàng.",
    s5P4: "Các nền tảng như Shopify, WooCommerce và các hệ thống thương mại điện tử khác ngày càng cung cấp nhiều tính năng tính VAT tích hợp, nhưng điều quan trọng là phải xác minh các cài đặt này bằng công cụ tính độc lập. Lỗi trong tính toán VAT tự động xảy ra thường xuyên, đặc biệt trong các giao dịch xuyên biên giới với nhiều thuế suất.",

    s6Title: "VAT khi nhập khẩu và xuất khẩu: Những điều bạn cần biết",
    s6P1: "Trong thương mại quốc tế, VAT nhập khẩu và xuất khẩu đóng vai trò quan trọng. Xuất khẩu từ EU sang các nước ngoài EU (nước thứ ba) về nguyên tắc được miễn VAT — gọi là thuế suất 0%. Điều này áp dụng cho cả hàng hóa và một số dịch vụ nhất định. Nhà xuất khẩu phải chứng minh được rằng hàng hóa thực sự đã rời khỏi EU, ví dụ bằng chứng từ hải quan.",
    s6P2: "Khi nhập khẩu hàng hóa từ ngoài EU, VAT nhập khẩu được thu tại hải quan. Thuế suất VAT áp dụng là thuế suất của nước nhập khẩu. Ngoài ra, có thể phải chịu thuế hải quan, tùy thuộc vào loại sản phẩm và nước xuất xứ. Từ năm 2021, miễn thuế VAT cho hàng hóa có giá trị dưới 22 euro đã bị bãi bỏ trong EU, nghĩa là tất cả hàng hóa nhập khẩu đều phải chịu VAT.",
    s6P3: "Đối với doanh nghiệp nhập khẩu thường xuyên, nhiều nước EU cung cấp cơ chế reverse charge cho VAT nhập khẩu. Theo đó, VAT nhập khẩu không phải trả tại hải quan mà được xử lý trong tờ khai VAT định kỳ. Điều này cải thiện đáng kể dòng tiền vì bạn có thể khấu trừ ngay VAT nhập khẩu với VAT phải nộp.",

    s7Title: "Quy định VAT của EU và One Stop Shop (OSS)",
    s7P1: "Liên minh Châu Âu đã tạo ra một hệ thống hài hòa với Chỉ thị VAT nhằm tạo thuận lợi cho thương mại xuyên biên giới. Mặc dù mỗi nước EU tự quy định thuế suất, nhưng có các quy tắc chung về nơi cung cấp dịch vụ, cơ chế reverse charge và các nghĩa vụ hành chính. Hệ thống One Stop Shop (OSS), ra mắt tháng 7 năm 2021, là công cụ quan trọng cho doanh nghiệp thương mại điện tử và nhà cung cấp dịch vụ số.",
    s7P2: "Thông qua OSS, bạn có thể nộp tất cả VAT phải trả cho các nước EU khác thông qua một tờ khai hàng quý duy nhất tại nước mình. Điều này giúp bạn không phải đăng ký VAT riêng tại từng nước EU — giảm đáng kể gánh nặng hành chính. OSS áp dụng cho bán hàng B2C hàng hóa và dịch vụ số cho người tiêu dùng ở các nước EU khác.",
    s7P3: "Ngoài OSS, còn có Import One Stop Shop (IOSS) cho hàng hóa nhập khẩu từ ngoài EU có giá trị đến 150 euro. Thông qua IOSS, người bán hoặc nền tảng có thể thu và nộp VAT khi bán, giúp người mua không phải trả VAT nhập khẩu khi nhận hàng. Điều này cải thiện trải nghiệm khách hàng và đẩy nhanh quá trình giao hàng.",
    s7P4: "Điều quan trọng cần biết là cơ chế reverse charge chỉ áp dụng khi cả hai bên có mã số VAT hợp lệ. Bạn có thể xác minh qua hệ thống VIES (VAT Information Exchange System) của Ủy ban Châu Âu. Khi nghi ngờ về tính hợp lệ của mã số VAT, bạn phải tính thuế suất VAT tiêu chuẩn để tránh bị truy thu.",

    s8Title: "VAT và thuế bán hàng toàn cầu: Các hệ thống quan trọng ngoài EU",
    s8P1: "Ngoài Liên minh Châu Âu, các quốc gia sử dụng hệ thống thuế tiêu dùng rất đa dạng. Vương quốc Anh sau Brexit vẫn giữ hệ thống VAT riêng, với thuế suất tiêu chuẩn và thuế suất ưu đãi cho các danh mục cụ thể. Úc, New Zealand, Canada và Singapore sử dụng thuật ngữ GST nhưng hoạt động tương tự VAT. Hoa Kỳ là ngoại lệ với hệ thống sales tax phi tập trung, thuế suất khác nhau theo bang và đôi khi theo thành phố.",
    s8P2: "Đối với doanh nhân quốc tế cũng bán hàng ngoài EU, điều quan trọng là phải biết nghĩa vụ thuế địa phương. Ở nhiều quốc gia có ngưỡng đăng ký: khi bạn đạt doanh thu vượt mức nhất định tại quốc gia đó, bạn phải đăng ký thuế tiêu dùng địa phương. Điều này ngày càng áp dụng cho dịch vụ số và thương mại điện tử, với các quốc gia như Úc, Nhật Bản và Hàn Quốc áp đặt nghĩa vụ cho nhà cung cấp nước ngoài.",
    s8P3: "Công cụ tính của chúng tôi hỗ trợ hơn 60 quốc gia và cung cấp thuế suất mới nhất cho cả nước EU và ngoài EU. Điều này làm cho nó trở thành công cụ lý tưởng cho doanh nghiệp hoạt động toàn cầu và muốn nhanh chóng tính đúng thuế suất VAT hoặc GST cho giao dịch quốc tế.",

    s9Title: "Tuân thủ VAT: Thực tiễn tốt nhất cho 2025-2026",
    s9P1: "Tuân thủ VAT đúng đắn đòi hỏi nhiều hơn việc tính đúng thuế suất. Nó bao gồm quản lý chặt chẽ, nộp đúng hạn, lập hóa đơn chính xác và lưu giữ tất cả tài liệu liên quan. Cơ quan thuế trong EU và ngoài EU ngày càng nghiêm ngặt hơn trong thực thi, đặc biệt đối với thương mại điện tử và dịch vụ số. Đầu tư vào phần mềm kế toán tốt và tham khảo ý kiến chuyên gia tư vấn thuế có kinh nghiệm quốc tế.",
    s9InvoiceTitle: "Lập hóa đơn và quản lý",
    s9InvoiceItems: [
      "Luôn ghi rõ thuế suất và số tiền VAT trên hóa đơn",
      "Lưu giữ hóa đơn ít nhất 7 năm hoặc theo quy định địa phương",
      "Sử dụng hệ thống đánh số hóa đơn liên tục",
      "Ghi rõ mã số VAT của cả hai bên",
      "Khi áp dụng reverse charge: ghi \"VAT đã chuyển nghĩa vụ\" trên hóa đơn"
    ],
    s9DeadlineTitle: "Thời hạn và kê khai",
    s9DeadlineItems: [
      "Luôn nộp tờ khai VAT đúng hạn",
      "Kê khai OSS: hàng quý (tháng sau khi kết thúc quý)",
      "Danh sách VIES: hàng quý cho giao dịch B2B trong EU",
      "Lưu giữ bằng chứng về vị trí của khách hàng",
      "Theo dõi ngưỡng đăng ký bắt buộc"
    ],
    s9P2: "Xu hướng rõ ràng: chính phủ đầu tư ngày càng nhiều vào công cụ thực thi số và báo cáo thời gian thực. Các quốc gia như Ý, Hungary và Tây Ban Nha đã triển khai hoặc đang triển khai hệ thống lập hóa đơn thời gian thực. Vì vậy, đầu tư ngay vào hệ thống mạnh mẽ cho tính toán và báo cáo VAT là điều khôn ngoan, để bạn sẵn sàng cho những thay đổi quy định trong tương lai.",

    s10Title: "Bạn có thể sử dụng công cụ tính VAT của chúng tôi cho những gì?",
    s10P1: "Công cụ tính VAT quốc tế của chúng tôi được thiết kế cho nhiều ứng dụng đa dạng. Dưới đây là các tình huống phổ biến mà doanh nhân sử dụng công cụ của chúng tôi:",
    s10UseCases: [
      { term: "Tính VAT cho giá cửa hàng trực tuyến", desc: "Xác định giá bán chính xác bao gồm hoặc chưa bao gồm VAT cho cửa hàng trực tuyến của bạn." },
      { term: "Tính VAT cho hàng nhập khẩu", desc: "Tính VAT nhập khẩu và tổng chi phí khi nhập khẩu hàng hóa." },
      { term: "Tính VAT cho dịch vụ trực tuyến", desc: "Xác định thuế suất chính xác cho dịch vụ số cung cấp cho khách hàng toàn cầu." },
      { term: "Tính VAT cho hóa đơn freelancer", desc: "Tính chính xác số tiền VAT cho hóa đơn quốc tế của bạn." },
      { term: "Tính VAT cho đăng ký SaaS", desc: "Xác định thuế suất VAT chính xác cho đăng ký phần mềm tại mỗi quốc gia." },
      { term: "Tính VAT cho dropshipping", desc: "Tính VAT cho hàng hóa dropship bao gồm thuế nhập khẩu." },
      { term: "Chuyển đổi giá có VAT sang không VAT", desc: "Nhanh chóng tách VAT khỏi giá đã bao gồm VAT cho mọi quốc gia." },
      { term: "So sánh thuế suất VAT giữa các nước", desc: "Xem và so sánh thuế suất VAT của các quốc gia khác nhau ngay lập tức." },
      { term: "Tính VAT cho Shopify và WooCommerce", desc: "Xác minh phép tính VAT của nền tảng thương mại điện tử của bạn." },
      { term: "Tính VAT ngược", desc: "Tính giá chưa bao gồm VAT từ số tiền đã bao gồm VAT cho kế toán và lập hóa đơn." }
    ],

    s11Title: "Tại sao chọn công cụ tính VAT quốc tế của chúng tôi?",
    s11P1: "Công cụ tính VAT của chúng tôi khác biệt so với các công cụ đơn giản khác vì hỗ trợ hơn 60 quốc gia với tất cả thuế suất mới nhất. Dù bạn cần tính VAT cho giao dịch trong một quốc gia hay muốn so sánh thuế suất giữa nhiều quốc gia, công cụ của chúng tôi cung cấp câu trả lời chính xác trong vài giây.",
    s11P2: "Công cụ tính này hoàn toàn miễn phí và hoạt động không cần đăng ký. Sử dụng không giới hạn số lần. Phù hợp cho cả doanh nhân cá nhân, doanh nghiệp vừa và công ty lớn cần công cụ đáng tin cậy cho tính toán VAT hàng ngày.",
    s11P3: "Với giao diện thân thiện, kết quả tức thì và dữ liệu thuế suất được cập nhật thường xuyên, công cụ tính VAT quốc tế của chúng tôi là công cụ không thể thiếu cho mọi doanh nghiệp hoạt động quốc tế. Hãy thử ngay và xem việc tính VAT chính xác dễ dàng như thế nào."
  }
};
