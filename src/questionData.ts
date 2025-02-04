interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}
export const questionData: Question[] = [
  {
    question: "Công trình điện lực là gì ?",
    options: [
      "Là hành lang bảo vệ an toàn lưới điện.",
      "Là tổ hợp các phương tiện, máy móc, thiết bị, kết cấu xây dựng phục vụ trực tiếp cho hoạt động phát điện, truyền tải điện, phân phối điện, điều độ hệ thống điện, mua bán điện.",
      "Là hệ thống bảo vệ công trình điện lực.",
      "Cả 3 đáp án đúng",
    ],
    correctAnswer: 3,
  },
  {
    question: "Đánh giá rủi ro là gì ?",
    options: [
      "Quá trình tìm hiểu.",
      "Xác định những rủi ro có thể xảy ra liên quan tới công việc chuẩn bị thực hiện.",
      "Đưa ra biện pháp phòng ngừa hợp lý.",
      "Cả 3 đáp án đúng",
    ],
    correctAnswer: 3,
  },
  {
    question: "Điện hạ áp được quy ước?",
    options: [
      "Điện áp dưới 380 V.",
      "Điện áp dưới 220 V.",
      "Điện áp trên 1.000 V.",
      "Điện áp dưới 1.000 V.",
    ],
    correctAnswer: 3,
  },
  {
    question: "Điện cao áp được quy ước ?",
    options: [
      "Từ 380 V trở lên            ",
      "Đến 1.000 V        ",
      "Trên 1.000 V",
      "Từ 1.000 V trở lên.            ",
    ],
    correctAnswer: 3,
  },
  {
    question: "Đơn vị công tác?",
    options: [
      "Là đơn vị quản lý vận hành các thiết bị điện, đường dây dẫn điện. Mỗi đơn vị công tác phải có ít nhất 02 người, trong đó phải có 01 người chỉ huy trực tiếp chịu trách nhiệm chung.",
      "Là đơn vị thực hiện công việc sửa chữa, thí nghiệm, xây lắp v.v. Mỗi đơn vị công tác phải có ít nhất 01 người, trong đó phải có 01 người chỉ huy trực tiếp chịu trách nhiệm chung.",
      "Là đơn vị thực hiện công việc sửa chữa, thí nghiệm, kiểm định, xây lắp, kinh doanh và các công việc khác liên quan đến công trình điện lực (bao gồm từ cấp tổ, Đội, phân xưởng, chi nhánh, khu vực đến cấp Công ty, Trung tâm).",
      "Là đơn vị quản lý vận hành các thiết bị điện, đường dây dẫn điện. Mỗi đơn vị công tác phải có ít nhất 02 người, trong đó phải có 01 người giám sát an toàn điện",
    ],
    correctAnswer: 2,
  },
  {
    question: "Đơn vị QLVH ? ",
    options: [
      "Là đơn vị trực tiếp thực hiện công việc quản lý, vận hành công trình điện lực.",
      "Là đơn vị trực tiếp cử ra đơn vị công tác để thực hiện công việc sửa chữa, thí nghiệm, xây lắp v.v",
      "Là đơn vị trực tiếp thực hiện công việc sửa chữa, thí nghiệm, xây lắp v.v.. các thiết bị điện, đường dây dẫn điện.",
      "Là do đơn vị công tác cử ra để thực hiện công việc sửa chữa, thí nghiệm, xây lắp v.v. ",
    ],
    correctAnswer: 0,
  },
  {
    question: "Làm việc có điện?",
    options: [
      "Là công việc làm ở thiết bị đã được cắt điện, không sử dụng các trang bị, dụng cụ chuyên dùng.",
      "Là công việc làm gần thiết bị mang điện, có sử dụng các trang bị, dụng cụ an toàn",
      "Là công việc làm ở thiết bị đang mang điện, có sử dụng các trang bị, dụng cụ chuyên dùng.",
      "Là công việc làm gần thiết bị mang điện, không sử dụng các trang bị, dụng cụ chuyên dùng",
    ],
    correctAnswer: 2,
  },
  {
    question: "Làm việc trên cao được hiểu như thế nào?",
    options: [
      "Là làm việc ở độ cao từ 10 m trở lên, được tính từ mặt đất (mặt bằng) đến điểm tiếp xúc của chân người thực hiện công việc.",
      "Là làm việc ở độ cao từ 2,0 m trở lên, được tính từ mặt đất (mặt bằng) đến điểm tiếp xúc thấp nhất của người thực hiện công việc.",
      "Là làm việc ở độ cao từ 3,0 m trở lên, được tính từ mặt đất (mặt bằng) đến điểm tiếp xúc của chân người thực hiện công việc.",
      "Là làm việc ở độ cao từ 4,0 m trở lên, được tính từ mặt đất (mặt bằng) đến điểm tiếp xúc của chân người thực hiện công việc.",
    ],
    correctAnswer: 1,
  },
  {
    question: "Người lãnh đạo công việc?",
    options: [
      "Là người chỉ đạo chung khi công việc do nhiều đơn vị công tác của cùng một tổ chức hoạt động điện lực thực hiện.",
      "Do người cho phép cử để chỉ đạo công việc do nhiều đơn vị công tác của cùng một tổ chức hoạt động điện lực thực hiện",
      "Là người chỉ huy trực tiếp nhóm công tác khi công việc do nhiều đơn vị công tác của cùng một tổ chức hoạt động điện lực thực hiện",
      "Do người cho phép cử để chỉ đạo công việc đơn vị công tác.",
    ],
    correctAnswer: 0,
  },
  {
    question: "Người chỉ huy trực tiếp?",
    options: [
      "Là người có trách nhiệm  giám sát nhân viên đơn vị công tác trong suốt quá trình thực hiện công việc.",
      "Là người có trách nhiệm phân công công việc, chỉ huy và giám sát Nhân viên đơn vị công tác trong suốt quá trình thực hiện công việc.",
      "Là người có trách nhiệm phân công công việc nhân viên đơn vị công tác trong suốt quá trình thực hiện công việc.",
      "Là người có trách nhiệm phân công công việc và giám sát nhân viên đơn vị công tác trong suốt quá trình thực hiện công việc.",
    ],
    correctAnswer: 1,
  },
  {
    question: "Người cấp phiếu công tác/lệnh công tác?",
    options: [
      "Là người chỉ đạo chung khi công việc do nhiều đơn vị công tác của cùng một tổ chức hoạt động điện lực thực hiện.",
      " Là người viết phiếu công tác/lệnh công tác cho Đơn vị  công tác và phải nắm rõ nội dung công việc, các điều kiện để đảm bảo an toàn về điện khi tiến hành công việc.",
      "Người có trách nhiệm phân công công việc, chỉ huy và giám sát nhân viên đơn vị công tác trong suốt quá trình thực hiện công việc.",
      "Cả 3 đáp án đúng",
    ],
    correctAnswer: 1,
  },
  {
    question: "Người cho phép? ",
    options: [
      "Là người thực hiện việc chỉ huy đơn vị công tác vào làm việc ở tại hiện trường .",
      "Là người thực hiện việc lãnh đạo đơn vị công tác vào làm việc ở tại hiện trường ",
      "Là người thực hiện việc giám sát đơn vị công tác vào làm việc ở tại hiện trường.",
      "Là người thực hiện thủ tuch cho phép Đơn vị công tác vào làm việc khi hiện trường công tác đã đảm bảo an toàn về điện.",
    ],
    correctAnswer: 3,
  },
  {
    question: "Người giám sát ATĐ ?",
    options: [
      "Là người có kiến thức về ATĐ, được huấn luyện, chỉ định và thực hiện việc giám sát ATĐ cho Đơn vị công tác",
      "Là người có kiến thức về an toàn điện, được huấn luyện và thực hiện việc giám sát an toàn điện cho đơn vị công tác",
      "Là người có kiến thức về an toàn điện và thực hiện việc giám sát an toàn điện cho đơn vị công tác",
      "Là người có trình độ trung cấp hoặc kỹ sư, được chỉ định và thực hiện việc giám sát an toàn điện đơn vị công tác",
    ],
    correctAnswer: 0,
  },
  {
    question: "Người cảnh giới?",
    options: [
      "Là người thực hiện việc theo dõi và cảnh báo an toàn liên quan đến nơi làm việc đối với cộng đồng.",
      "Là người được chỉ định và thực hiện việc theo dõi, cảnh báo an toàn liên quan đến nơi làm việc đối với cộng đồng.",
      "Là người được chỉ định và thực hiện cảnh báo tại nơi làm việc đối với cộng đồng.",
      "Là người thực hiện việc theo dõi và cảnh báo an toàn liên quan đến nơi làm việc đối với nhóm công tác",
    ],
    correctAnswer: 1,
  },
  {
    question: "Nhân viên đơn vị công tác được quy định như thế nào là đúng?",
    options: [
      "Là người của Đơn vị công tác trực tiếp thực hiện công việc do người chỉ huy trực tiếp phân công.",
      "Là người của đơn vị công tác trực tiếp thực hiện công việc do người lãnh đạo công việc phân công.",
      "Là người của đơn vị quản lý vận hành trực tiếp thực hiện công việc do giám sát an toàn điện phân công",
      "Là người của đơn vị ngoài thực hiện công việc do người cho phép giao",
    ],
    correctAnswer: 0,
  },
  {
    question: "Nhân viên vận hành là gì ?",
    options: [
      "Người làm việc theo chế độ ca, kíp.\n",
      "Người tham gia trực tiếp điều khiển quá trình sản xuất điện, truyền tải điện.",
      "Người tham gia trực tiếp điều khiển quá trình phân phối điện",
      "Cả 3 đáp án đúng",
    ],
    correctAnswer: 0,
  },
  {
    question: "Phương tiện bảo vệ cá nhân là gì?",
    options: [
      "Là những dụng cụ, phương tiện cần thiết mà người lao động phải được trang bị để sử dụng trong khi làm việc hoặc thực hiện nhiệm vụ để bảo vệ cơ thể khỏi tác động của các yếu tố nguy hiểm, độc hại phát sinh trong quá trình lao động, khi các giải pháp công nghệ, thiết bị, kỹ thuật an toàn, vệ sinh lao động tại nơi làm việc chưa thể loại trừ hết.",
      "Là trang bị mà Đơn vị công tác phải sử dụng để phòng ngừa tai nạn lao động",
      "Là các trang thiết bị kỹ thuật an toàn lao động",
      "Cả 3 đáp án đúng",
    ],
    correctAnswer: 0,
  },
  {
    question: "Đánh giá rủi ro có bao nhiêu cấp",
    options: ["02 cấp", "04 cấp", "03 cấp ", "05 cấp"],
    correctAnswer: 1,
  },
  {
    question: "Trạm điện không người trực là gì?",
    options: [
      "Là trạm điện mà nơi đó không có người trực vận hành tại chỗ. Việc theo dõi, giám sát các thông số vận hành, tình trạng hệ thống thiết bị (bao gồm thiết bị điện, thiết bị chữa cháy, các thiết bị phụ trợ khác) và thao tác các thiết bị được thực hiện từ xa qua hệ thống điều khiển và hệ thống thông tin, viễn thông.",
      "Là trạm điện mà nơi đó ít có người trực vận hành tại chỗ.",
      "Là trạm điện mà việc theo dõi, giám sát các thông số vận hành, tình trạng thiết bị và thao tác các thiết bị điện được thực hiện từ xa qua hệ thống điều khiển và hệ thống thông tin, viễn thông.",
      "Là nơi không có người trực vận hành tại chỗ. Việc theo dõi, giám sát các thông số vận hành, tình trạng thiết bị và thao tác các thiết bị điện được thực hiện từ xa qua hệ thống điều khiển và hệ thống thông tin, viễn thông.",
    ],
    correctAnswer: 0,
  },
  {
    question: "Vùng làm việc an toàn là như thế nào ?",
    options: [
      "Vùng đã cắt điện hoàn toàn",
      "Vùng đã thiết lập các biện pháp an toàn cho người, thiết bị khi thực hiện công việc.",
      "Vùng đã cắt điện một phần",
      "Vùng đã cắt điện một phần, đặt rào chắn đảm bảo an toàn",
    ],
    correctAnswer: 1,
  },
  {
    question: "Xe chuyên dùng là xe như thế nào ?",
    options: [
      "Xe được trang bị phương tiện để sử dụng cho mục đích riêng biệt",
      "Xe cẩu nhẹ",
      "Xe cẩu để nâng người và thiết bị",
      "Cả  03 đáp án đều sai",
    ],
    correctAnswer: 0,
  },
  {
    question: "Theo Quy trình An toàn điện, ĐD có nghĩa là gì",
    options: [
      "Đường dây điện trên không",
      "Đường cáp điện lực",
      "Đường dây điện cao áp",
      "Cả A và B",
    ],
    correctAnswer: 3,
  },
  {
    question: "Theo Quy trình An toàn điện, ĐDK có nghĩa là gì",
    options: [
      "Đường dây điện trên không",
      "Đường cáp điện lực",
      "Đường dây điện cao áp",
      "Đường dây điện hạ áp",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Các công việc khi tiến hành trên ĐD, thiết bị điện đang mang điện, bao gồm cả vùng bị ảnh hưởng nguy hiểm bởi cảm ứng điện, đều phải?",
    options: [
      "Thực hiện theo phiếu công tác.",
      "Thực hiện theo lệnh công tác.",
      "Thực hiện theo phiếu công tác hoặc lệnh công tác.",
      "Thực hiện theo phiếu công tác và lệnh công tác.",
    ],
    correctAnswer: 2,
  },
  {
    question: "Cấm ra mệnh lệnh hoặc giao công việc về điện cho những người?",
    options: [
      "Chưa được huấn luyện, kiểm tra đạt yêu cầu Quy trình an toàn điện. ",
      "Chưa được huấn luyện, kiểm tra đạt yêu cầu các quy trình có liên quan. ",
      "Chưa được huấn luyện, kiểm tra đạt yêu cầu Quy trình ATĐ, kiểm tra đạt yêu cầu quy trình ATĐ",
      "Cả  03 đáp án đều sai",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "Những mệnh lệnh không đúng Quy trình ATĐ và các quy trình có liên quan khác, có nguy cơ mất an toàn cho người hoặc thiết bị điện thì người nhận lệnh có quyền?",
    options: [
      "Không chấp hành, được quyền báo cáo với cấp trên.",
      "Báo cáo với cấp trên.",
      "Chấp hành.",
      "Không chấp hành, nếu người ra lệnh không chấp thuận thì người nhận lệnh được quyền báo cáo với cấp trên trực tiếp của người ra lệnh và/hoặc cấp có thẩm quyền.",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Khi phát hiện tổ chức, đơn vị, cá nhân vi phạm Quy trình  ATĐ và các Quy trình có liên quan khác, có nguy cơ gây mất an toàn đối với người hoặc thiết bị điện, người phát hiện phải?",
    options: [
      "Phải lập tức ngăn chặn và báo cáo với cấp trên trực tiếp và/hoặc cấp có thẩm quyền.",
      "Phải lập tức ngăn chặn.",
      "Phải báo cáo với cấp có thẩm quyền.",
      "Phải lập tức ngăn chặn và báo cáo với người cho phép.",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Người trực tiếp làm công tác QLVH, kinh doanh, thí nghiệm, sửa chữa, xây lắp điện phải ?",
    options: [
      "Có sức khỏe làm việc trên cao",
      "Có sức khỏe đủ tiêu chuẩn theo quy định của pháp luật về lao động",
      "Có sức khỏe, không bị bệnh nghề nghiệp",
      "Có giấy chứng nhận sức khỏe của cơ quan y tế.  ",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Đối tượng phải được cấp thẻ ATĐ, hàng năm cần được huấn luyện, kiểm tra Quy trình là đối tượng nào ?",
    options: [
      "Người vận hành, thí nghiệm, kiểm định, xây dựng, sửa chữa ĐD hoặc thiết bị điện, bao gồm cả treo, tháo, kiểm tra, kiểm định hệ thống đo đếm điện năng.",
      "Cán bộ quản lý kỹ thuật liên quan trực tiếp đến an toàn điện trong sản xuất, vận hành, sửa chữa, thí nghiệm.",
      "Người tham gia thực hiện PCT/LCT; Nhân viên vận hành và Nhân viên lái xe chuyên dùng phục vụ công tác điện.",
      "Cả 3 đáp án đúng",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Đối tượng không bắt buộc cấp thẻ ATĐ, chỉ cần tổ chức bồi huấn là những đối tượng nào ?",
    options: [
      "Cán bộ, công nhân viên không trực tiếp sản xuất, vận hành, sửa chữa điện.",
      "Cán bộ quản lý kỹ thuật không liên quan trực tiếp đến an toàn điện trong sản xuất, vận hành, sửa chữa, thí nghiệm.",
      "Cán bộ, công nhân viên làm công tác hỗ trợ việc thi công, giám sát, khảo sát công trình điện lực.",
      "Cả 3 đáp án đúng",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Người cấp phiếu, Người cho phép, Người giám sát ATĐ, Người lãnh đạo công việc, Người chỉ huy trực tiếp được quy định ra sao ?",
    options: [
      "Được Cấp có thẩm quyền ra quyết định công nhận hoặc giao nhiệm vụ, hàng năm phải được huấn luyện về những nội dung có liên quan, kiểm tra đạt yêu cầu.",
      "Được Cấp có thẩm quyền ra quyết định công nhận vàc giao nhiệm vụ, hàng năm phải được huấn luyện về những nội dung có liên quan, kiểm tra đạt yêu cầu.",
      "Là những Người mà hàng năm phải được huấn luyện về những nội dung có liên quan, kiểm tra đạt yêu cầu.",
      "Cả 3 đáp án sai",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Khi phát hiện có người bị điện giật, trong bất kỳ trường hợp nào người phát hiện cũng phải?",
    options: [
      "Gọi cấp cứu 115.",
      "Tìm biện pháp nhanh nhất để tách nạn nhân ra khỏi mạch điện và sơ cứu người bị nạn. ",
      "Tìm biện pháp nhanh nhất để tách nạn nhân ra khỏi mạch điện và cứu chữa người bị nạn. ",
      "Tìm biện pháp nhanh nhất để tách nạn nhân ra khỏi mạch điện. ",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Các tổ chức, cá nhân khi đến làm việc ở công trình và thiết bị điện thuộc quyền quản lý của EVN phải được trang bị phương tiện bảo vệ cá nhân như thế nào?",
    options: [
      "Trang bị phương tiện bảo vệ cá nhân theo đúng quy định của đơn vị mình.",
      "Tùy theo nhu cầu để trang bị phương tiện bảo vệ cá nhân.",
      "Trang bị đầy đủ phương tiện bảo vệ cá nhân theo đúng quy định của pháp luật về an toàn.",
      "Trang bị phương tiện bảo vệ cá nhân phải theo đúng quy định của nhà sản xuất thiết bị điện.",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "Giám đốc, Phó Giám đốc đơn vị trực tiếp sử dụng lao động; người quản lý, điều hành trực tiếp các công trường, phân xưởng hoặc các bộ phận tương đương có nhiệm vụ? ",
    options: [
      "Đề ra các biện pháp an toàn lao động, tổ chức kiểm tra và giám sát thực hiện các biện pháp an toàn đó trong đơn vị mình, đồng thời phải chịu hoàn toàn trách nhiệm về những biện pháp an toàn mà mình đã đề ra.",
      "Kiểm tra và giám sát thực hiện các biện pháp an toàn trong đơn vị mình, đồng thời phải chịu hoàn toàn trách nhiệm về những biện pháp an toàn đó.",
      "Đề ra các biện pháp an toàn lao động trong đơn vị mình.",
      "Kiểm tra việc thực hiện các biện pháp an toàn trong đơn vị mình.",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Việc đề ra các biện pháp an toàn lao động, tổ chức kiểm tra và giám sát thực hiện các biện pháp an toàn đó trong đơn vị mình do?",
    options: [
      "Giám đốc, Phó Giám đốc đơn vị trực tiếp sử dụng lao động.",
      " Người quản lý, điều hành trực tiếp các công trường, phân xưởng hoặc các bộ phận tương đương.",
      "Giám đốc, Phó Giám đốc đơn vị trực tiếp sử dụng lao động; người quản lý, điều hành trực tiếp các công trường, phân xưởng hoặc các bộ phận tương đương.",
      "Cả 3 đáp án đều sai.",
    ],
    correctAnswer: 2,
  },
  {
    question: "Người làm công tác an toàn các cấp có nhiệm vụ?",
    options: [
      "Tham mưu cho lãnh đạo đơn vị tổ chức kiểm tra, giám sát và trực tiếp kiểm tra định kỳ, đột xuất việc tuân thủ Quy trình này, bao gồm việc thực hiện các biện pháp an toàn đã đề ra trong quá trình thực hiện công tác của đơn vị mình.",
      "Trong trường hợp phát hiện có vi phạm thì được quyền lập biên bản vi phạm, nếu xét thấy vi phạm này có thể dẫn đến tai nạn hoặc hư hỏng thiết bị thì có quyền đình chỉ công việc để thực hiện đủ, đúng các biện pháp an toàn, đồng thời phải chịu hoàn toàn trách nhiệm về quyết định của mình.",
      "Tham mưu cho lãnh đạo đơn vị tổ chức kiểm tra, giám sát và trực tiếp kiểm tra định kỳ, đột xuất việc tuân thủ Quy trình An toàn điện, bao gồm việc thực hiện các biện pháp an toàn đã đề ra trong quá trình thực hiện công tác của đơn vị mình. Trong trường hợp phát hiện có vi phạm thì được quyền lập biên bản vi phạm, nếu xét thấy vi phạm này có thể dẫn đến tai nạn hoặc hư hỏng thiết bị điện thì có quyền đình chỉ công việc để thực hiện đủ, đúng các biện pháp an toàn, đồng thời phải chịu hoàn toàn trách nhiệm về quyết định của mình.",
      "Trong trường hợp vi phạm các biện pháp an toàn có thể dẫn đến tai nạn, sự cố thì được quyền lập biên bản và đình chỉ công việc.",
    ],
    correctAnswer: 2,
  },
  {
    question: "Bộ phận hoặc cá nhân chỉ được tiến hành công việc?",
    options: [
      "Khi đã thực hiện đủ, đúng các biện pháp an toàn đã đề ra. ",
      "Trong trường hợp vi phạm biện pháp an toàn phải dừng ngay công việc, chỉ được tiếp tục tiến hành công việc sau khi đã làm đủ, đúng các quy định về an toàn.",
      "Khi đã thực hiện đủ, đúng các biện pháp an toàn đã đề ra. Trong trường hợp vi phạm biện pháp an toàn phải dừng ngay công việc, báo cáo với cấp trên trực tiếp; nếu cấp trên trực tiếp không chấp thuận thì báo cáp cấp có thẩm quyền (theo đường dây nóng, số điện thoại đã được công bố), chỉ được tiếp tục tiến hành công việc sau khi đã làm đủ, đúng các quy định về an toàn.",
      "Cả 3 đáp án đều sai.",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "Khoảng cách ATĐ khi không có rào chắn đối với cấp điện áp 220kV mà khi làm việc không thể tránh được va chạm hoặc vi phạm khoảng cách đến phần mang điện được quy định là?",
    options: ["1,8 m", "2,5 m. ", "3,5 m", "2,0 m"],
    correctAnswer: 1,
  },
  {
    question:
      "Khoảng cách ATĐ khi không có rào chắn đối với cấp điện áp 500kV mà khi làm việc không thể tránh được va chạm hoặc vi phạm khoảng cách đến phần mang điện được quy định là?",
    options: ["3,2 m", "4,0 m ", "4,5 m.", "6,0 m"],
    correctAnswer: 2,
  },
  {
    question:
      "Khoảng cách ATĐ khi không có rào chắn đối với cấp điện áp 110kV mà khi làm việc không thể tránh được va chạm hoặc vi phạm khoảng cách đến phần mang điện được quy định là?",
    options: ["1,0 m", "1,5 m. ", "1,2 m", "2,0 m"],
    correctAnswer: 1,
  },
  {
    question:
      "Khoảng cách ATĐ khi không có rào chắn đối với cấp điện áp 22kV mà khi làm việc không thể tránh được va chạm hoặc vi phạm khoảng cách đến phần mang điện được quy định là?",
    options: ["0,7 m", "1,0 m. ", "2,0 m", "3 m"],
    correctAnswer: 1,
  },
  {
    question:
      "ĐD, thiết bị điện chưa được nối đất (tiếp đất hoặc tiếp địa) được quy định như thế nào ?",
    options: [
      "Coi như đang có điện",
      "Coi như đang cắt điện một phần",
      "Coi như đã cắt điện",
      "Liên hệ các đơn vị liên quan để kiểm tra có cắt điện hay chưa.",
    ],
    correctAnswer: 0,
  },
  {
    question: "Dây nối đất được quy định như thế nào?",
    options: [
      "Dây nối đất là dây đồng hoặc hợp kim mềm, nhiều sợi, tiết diện phải chịu được tác dụng lực điện động và nhiệt.",
      "Dây nối đất ngắn mạch (chống đóng điện nhầm từ nguồn điện đến) phải chịu được tác dụng điện động và nhiệt động khi có dòng ngắn mạch nhưng tiết diện không được nhỏ hơn 16mm2 đối với lưới điện cấp điện áp đến 35kV, 35mm2 đối với lưới điện cấp điện áp từ 110kV trở lên.",
      "Dây nối đất chống điện áp cảm ứng phải chịu được dòng điện do điện áp cảm ứng sinh ra, tiết diện không được nhỏ hơn 10mm2.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question: "Quy định về tiết diện dây nối đất chống điện áp cảm ứng ?",
    options: [
      "Không nhỏ hơn 12 mm2",
      "Không nhỏ hơn 10 mm2.",
      "Không nhỏ hơn 6 mm2 ",
      "Không nhỏ hơn 35 mm2",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Quy định bậc an toàn điện đối với người thực hiện đặt và tháo nối đất?",
    options: [
      "Đặt và tháo nối đất do 02 người thực hiện, 01 người giám sát và 01 người thao tác, trong đó người giám sát phải có bậc ATĐ từ bậc 4 trở lên, người thao tác phải có bậc ATĐ từ bậc 3 trở lên",
      "Đặt và tháo nối đất do hai người thực hiện,  01 người giám sát và 01 người thao tác, trong đó người giám sát phải có bậc ATĐ từ bậc 3 trở lên, người thao tác phải có bậc ATĐ từ bậc 2 trở lên.",
      "Đặt và tháo nối đất do hai người thực hiện,  01 người giám sát và 01 người thao tác, trong đó người giám sát phải có bậc ATĐ từ bậc 5 trở lên, người thao tác phải có bậc ATĐ từ bậc 2 trở lên.",
      "Cả 3 đáp án đều sai.",
    ],
    correctAnswer: 0,
  },
  {
    question: "Trình tự thực hiện đặt và tháo nối đất?",
    options: [
      "Khi đặt nối đất phải lắp một đầu dây nối đất với đất trước",
      "Khi tháo nối đất phải tháo đầu dây nối với đất  sau",
      "Khi đặt nối đất phải lắp một đầu dây nối đất với đất trước, sau đó lắp đầu còn lại vào ĐD, thiết bị điện; tháo nối đất làm theo trình tự ngược lại.",
      "Cả 03 đáp án đều sai.",
    ],
    correctAnswer: 2,
  },
  {
    question: "Yêu cầu khi đặt nối đất phải?",
    options: [
      "Đầu dây đấu xuống đất phải bắt bằng bu-lông, cấm vặn xoắn.",
      "Nếu đấu vào nối đất của cột hoặc hệ thống nối đất chung thì phải cạo sạch rỉ chỗ đấu nối đất.",
      "Đầu dây đấu xuống đất phải bắt bằng bulông, cấm vặn xoắn. Nếu đấu vào nối đất của cột hoặc hệ thống nối đất chung thì phải cạo sạch rỉ chỗ đấu nối đất.",
      "Cả 03 đáp án đều sai.",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "Khi thưc̣ hiêṇ thao tác đặt nối đất di động trên ĐD hoặc thiết bị điện, người làm nối đất phải ?",
    options: [
      "Phải đảm bảo khoảng cách an toàn theo quy định, không để dây nối đất va chạm vào người, sử dụng thiết bị thử điện để kiểm tra ĐD, thiết bị điện khoogn còn điện trước khi lắp dây nối đất và ĐD hoặc thiết bị điện.",
      "Đảm bảo khoảng cách an toàn theo quy định và không  để va chạm vào dây dẫn, cột điện, sử dụng thiết bị thử điện để kiểm tra ĐD, thiết bị điện khoogn còn điện trước khi lắp dây nối đất và ĐD hoặc thiết bị điện.",
      "Đảm bảo khoảng cách an toàn theo quy định và không để va chạm vào người.",
      "Không để các đầu dây tiếp đất va chạm vào người, va chạm vào các dây dẫn, thiết bị khác trên cột điện.",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Người nào phân công Nhân viên đơn vị công tác thực hiện đặt và tháo nối đất di động ?",
    options: [
      "Người cho phép",
      "Người lãnh đạo công việc.",
      "Người chỉ huy trực tiếp.",
      "Người giám sát ATĐ.",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "Người nào sẽ Quyết định và chịu trách nhiệm về việc cho phép tháo dỡ tạm thời nối đất di động ?",
    options: [
      "Người cho phép",
      "Người lãnh đạo công việc.",
      "Người chỉ huy trực tiếp.",
      "Người giám sát ATĐ.",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "Trong chế độ bình thường, thao tác thiết bị điện cao áp phải thực hiện theo quy định nào?",
    options: [
      "Theo Thông tư Quy định quy trình thao tác trong hệ thống điện quốc gia của Bộ Công Thương ban hành.",
      "Cho phép thực hiện các thao tác trên sơ đồ nối điện chính bằng các “Phiếu thao tác mẫu”. Phiếu thao tác mẫu phải được các cấp có thẩm quyền phê duyệt mới có hiệu lực thi hành.",
      "Theo Thông tư Quy định quy trình thao tác trong hệ thống điện quốc gia của Bộ Công Thương. Cho phép thực hiện các thao tác trên sơ đồ nối điện chính bằng các “Phiếu thao tác mẫu”. Phiếu thao tác mẫu phải được các cấp có thẩm quyền phê duyệt mới có hiệu lực thi hành.",
      "Phiếu thao tác",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Trong chế độ sự cố, thao tác khôi phục ĐD, thiết bị điện bị sự cố thực hiện theo quy định nào ?",
    options: [
      "Thông tư Quy định quy trình xử lý sự cố trong hệ thống điện quốc gia của Bộ Công Thương.",
      "Quy trình Thao tác hệ thống điện Quốc gia.",
      "Quy trình Thao tác trạm biến áp.",
      "Quy trình vận hành thiết bị điện.",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Các thiết bị đóng cắt của ĐD, thiết bị điện có bố trí công tác cắt điện phải được quy định như thế nào ?",
    options: [
      "Treo biển “Cấm đóng điện! Có người đang làm việc” tại chỗ thiết bị đóng cắt",
      "Khóa (lock) hoặc kéo ra khỏi vị trí vận hành để tránh thao tác nhầm,",
      "Cử người cảnh giới nếu không thực hiện được biện pháp khóa thiết bị đóng cắt.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Thao tác tại chỗ, kéo ra/đưa vào vị trí vận hành thiết bị đóng cắt cao áp được quy định như thế nào ?",
    options: [
      "Đi ủng cách điện cao áp hoặc mang găng tay cách điện cao áp.",
      "Mang găng tay cách điện cao áp.",
      "Đứng trên ghế/thảm cách điện phù hợp với cấp điện áp.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Trình tự thực hiện đối với  an toàn khi thao tác xa với 02 (hai) người phối hợp thực hiện (01 (một) người giám sát và 01 (một) người thao tác trực tiếp, trừ trường hợp thao tác xử lý sự cố khẩn cấp), gồm:",
    options: [
      "Người giám sát đọc lệnh (tên phiếu thao tác hoặc tên ĐD, thiết bị điện cần thao tác), người thao tác nhắc lại lệnh và thực hiện thao tác ĐD, thiết bị điện trên màn hình HMI/SCADA",
      "Người giám sát kiểm tra đủ điều kiện cần thực hiện thao tác.",
      "Người thao tác báo cáo người giám sát kết thúc thao tác.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question: "Quy định về an toàn khi thao tác xa thiết bị điện ?",
    options: [
      "Mọi thao tác xa đều phải có 02 (hai) người phối hợp thực hiện",
      "01 (một) người giám sát và 01 (một) người thao tác trực tiếp.",
      "Trừ trường hợp thao tác xử lý sự cố khẩn cấp theo Quy định",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question: "Cho phéo thao tác xa dao tiếp địa với điều kiện như thế nào:",
    options: [
      "Phải xác định được trạng thái tại chỗ máy cắt, dao cách ly liên quan đã mở hoàn toàn thông qua xác nhận của Nhân viên vận hành tại nơi đặt thiết bị đóng cắt hoặc camera giám sát vận hành.",
      "Mạch khoá liên động của dao tiếp địa (mạch logic giữa dao tiếp địa với dao cách ly và điện áp) đã được thí nghiệm, nghiệm thu và đưa vào vận hành",
      "Phải xác định được ĐD hoặc thiết bị điện đã mất điện căn cứ thông số điện áp hoặc xác nhận của Nhân viên vận hành có mặt tại trạm điện, nhà máy điện.",
      "Cả 3 đáp án đúng",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Những quy định về an toàn trong việc thao tác tại chỗ thiết bị điện, thiết bị chữa cháy trường hợp cần thao tác xử lý sự cố khẩn cấp ?",
    options: [
      "Người giám sát phải giữ liên lạc liên tục với người thao tác trong quá trình thao tác theo đúng trình tự thao tác giám sát từ xa được quy định theo quy trình ATĐ.",
      "Phải được hỗ trợ giám sát thao tác từ xa thông qua hệ thống camera giám sát vận hành. ",
      "Người giám sát phải quan sát được toàn bộ thiết bị và người thao tác.",
      "Cả 3 đáp án đúng",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Những biện pháp kỹ thuật chung chuẩn bị nơi làm việc có cắt điện bao gồm?",
    options: [
      "(1)Cắt điện; (2) Kiểm tra không còn điện; (3)Đặt nối đất; (4) Đặt rào chắn; treo biển báo, tín hiệu",
      "(1) Cắt điện và thực hiện các ngăn chặn có điện trở lại nơi làm việc; (2) Kiểm tra không còn điện.; (3) Đặt nối đất; (4) Treo biển báo, tín hiệu. Đặt rào chắn, căng dây (nếu cần thiết).",
      "(1)Cắt điện và ngăn chặn có điện trở lại nơi làm việc; (2) Đặt rào chắn; treo biển báo, tín hiệu; (3) Kiểm tra không còn điện; (4) Đặt nối đất",
      "(1) Cắt điện; (2) Kiểm tra không còn điện; (3) Đặt nối đất; (4) Đặt rào chắn; treo biển báo, tín hiệu; Nếu cắt điện hoàn toàn thì không phải làm rào chắn",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Thực hiện những biện pháp kỹ thuật chuẩn bị nơi làm việc phải cắt điện theo trình tự nào sau đây đúng?",
    options: [
      "1. Cắt điện và ngăn chặn có điện trở lại nơi làm việc. \n2. Đặt nối đất.\n3.  Kiểm tra không còn điện.\n4. Đặt rào chắn, treo biển báo, tín hiệu.",
      "1. Cắt điện và ngăn chặn có điện trở lại nơi làm việc. \n2. Đặt rào chắn, treo biển báo, tín hiệu. \n3. Kiểm tra không còn điện.\n4. Đặt nối đất.",
      "(1) Cắt điện và thực hiện các ngăn chặn có điện trở lại nơi làm việc; \n(2) Kiểm tra không còn điện.; (3) Đặt nối đất; \n(4) Treo biển báo, tín hiệu. Đặt rào chắn, căng dây (nếu cần thiết).",
      "1. Kiểm tra không còn điện. \n2. Đặt nối đất.\n3. Đặt rào chắn, treo biển báo, tín hiệu.\n4. Cắt điện và ngăn chặn có điện trở lại nơi làm việc. ",
    ],
    correctAnswer: 2,
  },
  {
    question: "Để làm công việc những trường hợp nào sau đây phải cắt điện?",
    options: [
      "Những phần có điện mà tại đó sẽ tiến hành công việc.",
      "Những phần có điện mà khi làm việc có thể vi phạm khoảng cách ATĐ đến phần mang điện khi không có và có rào chắn.",
      "Những phần có điện mà khi làm việc có thể vi phạm khoảng cách đến phần mang điện với khoảng cách cho phép cho phép nhỏ nhất và khoảng cách an toàn phóng điện.",
      "Cả 3 đáp án đúng",
    ],
    correctAnswer: 3,
  },
  {
    question: "Quy định kiểm tra xác định không còn điện?",
    options: [
      "Nhân viên vận hành phải tiến hành kiểm tra xác định không còn điện ở các thiết bị, ĐD đã cắt điện.",
      "Kiểm tra không còn điện bằng thiết bị thử điện chuyên dùng phù hợp với điện áp danh định của thiết bị cần thử như bút thử điện, còi thử điện; phải thử ở tất cả các pha và các phía vào, ra của thiết bị điện.",
      "Nhân viên vận hành phải tiến hành kiểm tra xác định không còn điện ở các thiết bị, ĐD đã cắt điện. Kiểm tra không còn điện bằng thiết bị thử điện chuyên dùng phù hợp với điện áp danh định của thiết bị cần thử như bút thử điện, còi thử điện; phải thử ở tất cả các pha và các phía vào, ra của thiết bị điện.",
      "Căn cứ tín hiệu đèn, rơle, đồng hồ để xác nhận thiết bị điện không còn điện. Nếu đèn, rơ le, đồng hồ báo tín hiệu có điện thì thiết bị vẫn có điện.",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "Căn cứ vào tín hiệu đèn, rơle, đồng hồ để xác nhận thiết bị điện không còn điện là đúng hay sai?",
    options: [
      "Đúng ",
      "Sai",
      "Tùy theo tình huống cụ thể",
      "Cả 3 đáp án đều sai.",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Nơi làm việc có cắt điện, nối đất nơi làm việc phải thực hiện  theo yêu cầu nào?",
    options: [
      "Phải nối đất (cố định, di động)ngay sau khi kiểm tra không còn điện. Nối đất ở tất cả các pha của thiết bị điện, phụ tải hoặc các nguồn điện khác về phía có khả năng dẫn điện đến.",
      "Đảm bảo khoảng cách an toàn đối với phần còn mang điện.",
      "Đảm bảo cho toàn bộ Nhân viên đơn vị công tác nằm trọn trong vùng bảo vệ của nối đất.",
      "Cả 3 đáp án đúng",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Nối đất nơi làm việc có cắt điện thì phải thực hiện như thế nào?",
    options: [
      "Thử hết điện ngay sau khi nối đất.",
      "Nối đất ở tất cả các pha của thiết bị điện, phụ tải hoặc các nguồn điện khác về phía có khả năng dẫn điện đến.",
      "Đảm bảo khoảng cách an toàn đối với phần không còn mang điện và đảm bảo cho toàn bộ đơn vị công tác nằm trọn trong vùng bảo vệ của nối đất.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Nối đất tạo vùng an toàn khi làm việc thực hiện theo nguyên tắc nào?",
    options: [
      "Đơn vị QLVH tổ chức thực hiện nối đất tại tất cả các đầu có nguồn điện đến để tạo vùng làm việc an toàn trước khi bàn giao hiện trường.",
      "Đơn vị công tác chịu trách nhiệm thực hiện nối đất di động tại nơi làm việc sao cho Đơn vị công tác nằm trọn trong vùng bảo vệ của nối đất, trừ quy định tại Điều 26 Quy trình này.",
      "Việc dỡ bỏ tạm thời nối đất di động để thực hiện các công việc cần thiết của Đơn vị công tác chỉ được thực hiện theo lệnh của Người chỉ huy trực tiếp và phải được thực hiện nối đất lại ngay sau khi kết thúc công việc đó.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question: "Các hình thức nối đất khi làm việc trên ĐD cao áp",
    options: [
      "Nối đất ngắn mạch (cố định hoặc/và di động)",
      "Nối đất di động",
      "Nối đất chống điện áp cảm ứng",
      "Cả A và C",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Nối đất khi làm việc trên ĐD cao áp với hai nguồn cung cấp không có rẽ nhánh ?",
    options: [
      "Không cần làm nối đất ở đầu mỗi nhánh.",
      "Làm nối đất ở một đầu ĐD.",
      "Phải làm nối đất ở hai đầu ĐD.",
      "Cả 3 đáp án đều sai.",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "Nối đất ngắn mạch khi làm việc trên ĐDK thực hiện theo yêu cầu nào?",
    options: [
      "Tại vị trí làm việc phải có nối đất dây dẫn, nếu nối đất này cản trở đến công việc thì được phép làm ở vị trí liền kề gần nhất vị trí làm việc về phía nguồn điện đến.",
      " Khi công việc có tháo rời dây dẫn thì phải nối đất ở hai phía chỗ định tháo rời trước khi tháo.",
      "(i)Nếu làm việc trên ĐDK hai nguồn cấp không có rẽ nhánh, phỉa làm nối đất hai đầu ĐD. (ii)\tNếu làm việc trên ĐD một nguồn cấp không có nhánh rẽ, cho phép làm nối đất ở đầu ĐDK có nguồn cấp đến, đầu còn lại phải mở thiết bị đóng cắt. (iii)Nếu làm việc trên ĐDK có nhiều nguồn cấp đến và có nhánh rẽ, phải làm nối đất ở các đầu ĐDK có nguồn cấp đến, các nhánh không có nguồn cấp đến mở thiết bị đóng cắt, nhánh nào không mở được thiết bị đóng cắt thì phải làm một bộ nối đất ở nhánh đó.",
      "Cả 03 đáp án đều sai.",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "Với điện áp từ 35kV trở xuống, những thiết bị cắt điện để công tác nhưng cho phép không cần nối đất di động nếu thỏa mãn đồng thời những yêu cầu nào sau đây?",
    options: [
      "Thiết bị có cấu trúc gọn, quan sát toàn bộ dễ dàng. Có thể cách ly hoàn toàn khỏi lưới điện bằng thiết bị đóng cắt mà đứng tại chỗ nhìn thấy rõ, chắc chắn khoảng hở và không có hiện tượng rò điện.",
      "Chắc chắn không có hiện tượng cảm ứng điện từ xuất hiện trên thiết bị điện đó;",
      "Cho phép không cần nối đất di động được ghi rõ trong PCT/LCT.",
      "Cả 3 đáp án đúng",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Những công việc nào sau đây được phép tạm thời tháo gỡ dây nối đất trong thời gian tiến hành các công việc?",
    options: [
      "Đo, kiểm tra điện trở nối đất.",
      "Đo các thông số của thiết bị điện, ĐD mà bắt buộc không được nối đất.",
      "Củng cố lại nối đất của thiết bị, đường dây hoặc của hệ thống nối đất toàn trạm ",
      "Cả 3 đáp án đúng",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Khi làm việc tại một công trình điện lực có cắt điên có nhiều Đơn vị công tác khác nhau thì biện pháp kỹ thuật an toàn sẽ như thế nào ?",
    options: [
      "Biên pháp kỹ thuật an toàn chung.",
      "Mỗi Đơn vị công tác phải thực hiện biện pháp kỹ thuật an toàn riêng biệt",
      "Họp thống nhất và biện pháp kỹ thuật án toàn chung",
      "Biện pháp kỹ thuật an toàn Đơn vị QLVH",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Yêu cầu đối với Biện pháp kỹ thuật an toàn để thiết lập vùng làm việc an toàn gần nơi có điện ?",
    options: [
      "Không được ảnh hưởng đến vận hành của các phần có điện gần vùng làm việc an toàn.",
      "Không được ảnh hưởng đến vận hành của các phần có điện gần vùng làm việc an toàn và không cản trở hoặc gây khó khăn cho Đơn vị công tác trong việc thoát nạn khi xảy ra tai nạn, sự cố.",
      "Không cản trở Đơn vị công tác trong việc thoát nạn khi xảy ra tai nạn, sự cố.",
      "Không cản trở hoặc gây khó khăn cho Đơn vị công tác trong việc thoát nạn khi xảy ra tai nạn, sự cố.",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Các quy định trong quá trình làm việc đối với Đơn vị công tác khi tiếp nhận vùng làm việc án toàn ?",
    options: [
      "Không được vượt qua ranh giới vùng làm việc an toàn do Đơn vị QLVH lập và bàn giao cho Đơn vị công tác.",
      "Không được vượt qua ranh giới vùng làm việc an toàn do Đơn vị QLVH lập và bàn giao cho Đơn vị công tác; không dịch chuyển, dỡ bỏ rào chắn, biển báo, tín hiệu xác định vùng làm việc an toàn và các biện pháp an toàn do Đơn vị QLVH lập.",
      "Không được vượt qua ranh giới vùng làm việc an toàn do Đơn vị công tác lập; không dịch chuyển, dỡ bỏ rào chắn, biển báo, tín hiệu xác định vùng làm việc an toàn và các biện pháp an toàn..",
      "Không dịch chuyển, dỡ bỏ rào chắn, biển báo, tín hiệu xác định vùng làm việc an toàn và các biện pháp an toàn do Đơn vị QLVH lập.",
    ],
    correctAnswer: 1,
  },
  {
    question: "Rào chắn tạm thời được thiết lập theo nguyên tắc nào?",
    options: [
      "Do Đơn vị QLVH thiết lập, tạo ranh giới an toàn cho Nhân viên đơn vị công tác khi làm việc gần vùng nguy hiểm của thiết bị điện đang mang điện.",
      "Ngăn cách phần thiết bị có điện với thiết bị cắt điện.",
      "Ngăn cách giữa các  thiết bị có điện với nhau.",
      "Phân biệt giữa phần mang điện với phần đã cắt điện.",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Trong quá trình làm việc, Nhân viên đơn vị công tác phải thực hiện như thế nào đối với rào chắn ?",
    options: [
      "Không được chạm hoặc vượt qua vùng được tạo bởi các rào chắn.",
      "Được vượt qua vùng được tạo bởi các rào chắn nhưng phải báo người cho phép",
      "Được vượt qua vùng được tạo bởi các rào chắn nhưng phải báo người chỉ huy trực tiếp",
      "Được vượt qua vùng được tạo bởi các rào chắn nhưng phải báo người  cấp phiếu  công tác ",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Khi làm việc gần khu vực có điện áp đến 22kV, nếu rào chắn có khả năng chạm vào phần mang điện thì phải như thế nào?",
    options: [
      "Phải cắt điện để tiến hành công việc.",
      "Người đặt rào chắn phải đeo găng cách điện, đi ủng cách điện hoặc đứng trên tấm thảm cách điện.",
      "Phải sử dụng rào chắn bằng vật liệu cách điện phù hợp với cấp điện áp làm việc. Khi đó, người đặt rào chắn phải sử dụng phương tiện, dụng cụ cách điện phù hợp và thực hiện dưới sự giám sát trực tiếp của người có bậc 5 an toàn điện.",
      "Phải sử dụng rào chắn bằng vật liệu cách điện phù hợp với cấp điện áp làm việc. Khi đó, người đặt rào chắn phải sử dụng phương tiện, dụng cụ cách điện phù hợp và thực hiện dưới sự giám sát trực tiếp của người có bậc 4 an toàn điện.",
    ],
    correctAnswer: 2,
  },
  {
    question: "Trên rào chắn tạm thời phải treo biển cảnh báo nào ?",
    options: [
      "“Cấm trèo! Điện áp cao  nguy hiểm chết người”. ",
      "“Dừng lại! Có điện nguy hiểm chết người”. ",
      "Làm việc tại đây",
      "Vào hướng này",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Ở thiết bị phân phối điện trong nhà, các ngăn bên cạnh và đối diện không có rào lưới hoặc cửa và các lối đi mà người làm việc không được đi qua thì phải đặt rào chắn, biển báo nào?",
    options: [
      "Dùng rào chắn tạm thời ngăn lại và treo biển cảnh báo “Dừng lại! Có điện nguy hiểm chết người”",
      "Dùng rào chắn tạm thời ngăn lại và treo biển cảnh báo “Dừng lại! Có điện  chết người”",
      "Dùng rào chắn tạm thời để treo biển cảnh báo “Dừng lại! Có điện nguy hiểm chết người”",
      "Dùng rào chắn tạm thời ngăn lại và treo biển cảnh báo Làm việc tại đây”",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Tại nơi làm việc, sau khi làm nối đất phải treo biển chỉ dẫn nào ?",
    options: [
      '""Vào hướng này""',
      "“Làm việc tại đây!”.",
      '"Đã nối đất"',
      "Cả 3 đáp án đúng. ",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Đối với ĐDK cao áp đi chung cột  phải đặt những báo hiệu, tín hiệu gì?",
    options: [
      "Đặt cờ báo hiệu “màu vàng” tại phía đường dây có điện , cờ báo hiệu “màu đỏ” phía đường dây đã nối đất và đảm bảo nhân viên đơn vị công tác nhìn thấy rõ.",
      "Đặt cờ báo hiệu “màu vàng” tại phía ĐDK đã nối đất, cờ báo hiệu “màu đỏ” phía ĐDK có điện và đảm bảo Nhân viên đơn vị công tác nhìn thấy rõ.",
      'Đặt cờ báo hiệu “màu vàng” tại phía đường dây đã nối đất, cờ báo hiệu “màu đỏ” phía đường dây có điện. Đặt biển  "Vào hướng này"',
      "Đặt cờ báo hiệu “màu vàng” tại phía đường dây đã nối đất, cờ báo hiệu “mầu đỏ” phía đường dây có điện. Đặt biển “Làm việc tại đây!”.",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Trong thời gian làm việc có được phép di chuyển hoặc tháo các rào chắn tạm thời và biển báo, tín hiệu không ?",
    options: [
      "Cấm",
      "Cho phép",
      "Có thể di chuyển ",
      "Được phép khi có sự đồng ý của người chỉ huy trực tiếp",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Để đảm bảo an toàn khi làm việc ở thiết bị điện thì phải thực hiện biện pháp tổ chức nào sau đây? ",
    options: [
      "Khảo sát, lập biên bản hiện trường, lập phương án thi công và biện pháp an toàn theo quy định. Đăng ký công tác",
      "\nLàm việc theo PCT hoặc LCT.\nCho phép làm việc tại hiện trường.\nGiám sát an toàn trong thời gian làm việc.",
      "Những biện pháp tổ chức khác như: nghỉ giải lao; nghỉ hết ngày làm việc và bắt đầu ngày tiếp theo; thay đổi người khi làm việc; kết thúc công việc, trao trả nơi làm việc, khoá phiếu PCT; trách nhiệm của các đơn vị có liên quan khi thực hiện công việc.",
      "Cả 3 đáp án đúng. ",
    ],
    correctAnswer: 3,
  },
  {
    question: "Quyền hạn, trách nhiệm của Đơn vị QLVH",
    options: [
      "Kiểm tra, giám sát phát hiện các hiện tượng mất an toàn để kịp thời xử lý.",
      "Quản lý và vận hành an toàn công trình điện lực theo quy định. Cho phép Đơn vị công tác vào làm việc.",
      "Được phép dừng công việc của Đơn vị công tác nếu có nguy cơ gây mất an toàn hoặc vi phạm quy trình, quy định về an toàn.",
      "Cả 3 đáp án đúng. ",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Yêu cầu đối với các công việc phải khảo sát hiện trường để lập biện pháp tổ chức thi công là gì ?",
    options: [
      "Công việc được thực hiện theo kế hoạch.\n",
      "Công tác có yếu tố nguy hiểm, có thể gây tai nạn cho người tham gia thực hiện công việc.",
      "Hoặc công tác có yếu tố nguy hiểm, có thể gây tai nạn cho cộng đồng.",
      "Cả 3 đáp án đúng. ",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Quy định về hiện trường công tác có yếu tố nguy hiểm, có thể gây tai nạn cho người tham gia thực hiện công việc hoặc cho cộng đồng phải thực hiện khảo sát hiện trường lập biện pháp tổ chức thi công ?",
    options: [
      "Công tác sửa chữa nóng.",
      "Công tác có thể vi phạm khoảng cách ATĐ; làm việc trên ĐD vượt sông, vượt đường; làm việc trên ĐD gần hoặc giao chéo ĐD cao áp khác.",
      "Công tác kéo dây, dựng cột, đào đường có thể gây tai nạn cho người tham gia giao thông.",
      "Cả 3 đáp án đúng. ",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Công tác khảo sát, lập biên bản hiện trường do đơn vị nào thực hiện? ",
    options: [
      "Đơn vị quản lý vận hành. ",
      "Đơn vị công tác phải chủ trì và phối hợp với Đơn vị QLVH để tổ chức khảo sát, lập biên bản hiện trường. ",
      "Đơn vị tổ chức công việc. ",
      "Đơn vị tư vấn giám sát. ",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Người đi khảo sát lập biên bản hiện trường phải là những người  nào?",
    options: [
      "Người sẽ được cử làm Người chỉ huy trực tiếp, Người giám sát ATĐ",
      "Người sẽ được cử làm Người lãnh đạo công việc, Người giám sát ATĐ",
      "Người sẽ được cử làm Người cho phép, Người giám sát ATĐ",
      "Người sẽ được cử làm Người cấp phiếu hoặc Người giám sát ATĐ.",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Tại thời điểm thực hiện công việc, nếu người chỉ huy trực tiếp hoặc người giám sát ATĐ không có tên trong biên bản khảo sát hoặc không trực tiếp tham gia khảo sát hiện trường thì những người này vẫn phải nắm và biết những nội dung gì? ",
    options: [
      "Phải biết rõ điều kiện an toàn khi tiến hành công việc.",
      "Phải biết rõ công việc, điều kiện an toàn khi tiến hành công việc.",
      "Phải được phổ biến để nhận biết rõ các yếu tố nguy hiểm, điều kiện an toàn khi tiến hành công việc.",
      "Phải biết rõ các yếu tố nguy hiểm, điều kiện thời tiết khi tiến hành công việc.",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "Công việc nào không khảo sát hiện trường nhưng phải thỏa mãn các điều kiện nào?",
    options: [
      "Công việc đơn giản, các yếu tố nguy hiểm về an toàn điện của khu vực cần làm việc đã được người chỉ huy trực tiếp và đơn vị QLVH đều biết rõ",
      "Đơn vị QLVH và Đơn vị làm công việc có thể không khảo sát hiện trường, nhưng vẫn phải lập biên bản ghi nhận các công việc cần làm và đưa ra các biện pháp an toàn cần thiết.",
      "Công việc đã được khảo sát hiện trường đánh giá rủi ro từ trước, hiện trường không thay đổi, các yếu tố nguy hiểm về ATĐ của khu vực cần làm việc đã được Đơn vị công tác và Đơn vị QLVH đều biết rõ.",
      "Cả 03 đáp án đều sai.",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "Công việc có liên quan đến ĐD, thiết bị điện của từ 02 Đơn vị QLVH trở lên thì khi khảo sát, lập biên bản hiện trường được thực hiện như thế nào?",
    options: [
      "Đơn vị công tác và các Đơn vị QLVH phải thống nhất, làm rõ trách nhiệm của từng bên trong biên bản khảo sát hiện trường.",
      "Các đơn vị QLVH còn lại chịu trách nhiệm cấp Giấy phối hợp cho phép để khi tổ chức triển khai công việc đảm bảo tuyệt đối an toàn. ",
      "Việc cử đơn vị QLVH cấp Phiếu công tác và Giấy phối hợp cho phép thực hiện theo quy định.",
      "Cả 3 đáp án đúng",
    ],
    correctAnswer: 0,
  },
  {
    question: "Các công việc phải lập biện pháp ATĐ trong phươmg án thi công ?",
    options: [
      "Công việc sửa chữa nóng.",
      "Công việc có thể vi phạm khoảng cách ATĐ; làm việc trên ĐD vượt sông, vượt đường; làm việc trên ĐD gần hoặc giao chéo ĐD cao áp khác.",
      "Công việc kéo dây, dựng cột, đào đường có thể gây tai nạn cho người tham gia giao thông.",
      "Cả 3 đáp án đúng. ",
    ],
    correctAnswer: 3,
  },
  {
    question: "Trách nhiệm lập biện pháp ATĐ trong phươmg án thi công",
    options: [
      "Đơn vị QLVH lập biện pháp ATĐ trong phương án thi công.",
      "Cấp có thẩm quyền của Đơn vị công tác có trách nhiệm chủ trì và phối hợp với Đơn vị QLVH trong việc lập biện pháp ATĐ trong phương án thi công",
      "Đơn vị công tác lập biện pháp ATĐ trong phương án thi công.",
      "Đơn vị QLVH  và Đơn vị công tác phối hợp lập biện pháp ATĐ trong phương án thi công.",
    ],
    correctAnswer: 1,
  },
  {
    question: "Các nội dung chính của biện pháp ATĐ trong phươmg án thi công",
    options: [
      "Các yếu tố nguy hiểm tại hiện trường công tác, biện pháp phòng tránh và bảo đảm an toàn cho người tham gia thực hiện công việc và cho cộng đồng tại nơi làm việc; trường hợp công việc thực hiện nhiều ngày thì các bên liên quan thống nhất thỏa thuận.",
      "Tên công việc; phạm vi được phép làm việc và bố trí nguồn nhân lực thực hiện.",
      "Trách nhiệm của Đơn vị QLVH, Đơn vị công tác để thực hiện công việc đúng tiến độ, bảo đảm an toàn.",
      "Cả 3 đáp án đúng. ",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Đơn vị thực hiện phê duyệt, thỏa thuận và sửa đổi, bổ sung biện pháp ATĐ trong phương án thi công:",
    options: [
      "Đơn vị QLVH",
      "Đơn vị công tác",
      "Đơn vị QLVH và Đơn vị công tác",
      "Cả 3 đáp án đều sai.",
    ],
    correctAnswer: 0,
  },
  {
    question: "Đăng ký công tác được thực hiện như thế nào?",
    options: [
      "Đơn vị công tác đăng ký công tác theo quy định gửi đến Đơn vị QLVH để đơn vị này lập kế hoạch đăng ký cắt điện, cấp PCT hoặc LCT.",
      "Tiếp nhận đăng ký công tác, Đơn vị QLVH lập kế hoạch để kết hợp công tác và đăng ký cắt điện với Cấp điều độ có quyền điều khiển theo quy định (trường hợp có cắt điện)",
      "Đơn vị QLVH thông báo và gửi lịch cắt điện cho Đơn vị công tác để triển khai công việc khi đăng ký cắt điện đã được phê duyệt",
      "Cả 3 đáp án đúng",
    ],
    correctAnswer: 3,
  },
  {
    question: "Phiếu công tác là?",
    options: [
      "Phiếu cho phép Đơn vị công tác làm việc với ĐD, thiết bị điện.",
      "Phiếu giao nhiệm vụ cho Đơn vị công tác để thực hiện công việc tại lưới truyền tải điện.",
      "Phiếu đăng ký vào làm việc của đơn vị công tác với đơn vị quản lý vận hành.",
      "Cả 3 đáp án đều  sai",
    ],
    correctAnswer: 0,
  },
  {
    question: "Mỗi Phiếu công tác chỉ được cấp cho?",
    options: [
      "Cho một Đơn vị công tác cho 01 công việc.",
      "Hai Đơn vị công tác để làm  01 công việc.",
      "Ba Đơn vị công tác để làm  01 công việc.",
      "Bốn Đơn vị công tác để làm  01 công việc.",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Trình tự làm việc lần lượt ở nhiều vị trí trong phạm vi được phép làm việc khi cấp 01 PCT cho 01 Đơn vị công tác là?  ",
    options: [
      "Những vị trí cùng làm việc theo 01 PCT này phải được Nhân viên vận hành thực hiện biện pháp kỹ thuật chuẩn bị nơi làm việc. ",
      "Được người cho phép chỉ dẫn cho Người chỉ huy trực tiếp các vị trí sẽ tiến hành công việc trước khi Đơn vị công tác bắt đầu tiến hành công việc tại vị trí đầu tiên.",
      "Những vị trí cùng làm việc theo 01 PCT này phải được thực hiện biện pháp kỹ thuật chuẩn bị nơi làm việc và được Người cho phép chỉ dẫn cho Người chỉ huy trực tiếp các vị trí sẽ tiến hành công việc trước khi Đơn vị công tác bắt đầu tiến hành công việc tại vị trí đầu tiên.",
      "Cả 03 đáp án đều sai.",
    ],
    correctAnswer: 2,
  },
  {
    question: "Cấp PCT giấy phải thực hiện ?",
    options: [
      "Theo đúng mẫu, rõ ràng, đủ và đúng theo yêu cầu công việc; không được để rách nát, nhòe chữ; cấm tẩy xóa.",
      "Lập thành 02 bản: Người cấp phiếu ký 02 bản, chuyển đến Người cho phép, Người chỉ huy trực tiếp mỗi người 01 bản. Người tham gia thực hiện PCT phải ký 02 bản, mỗi đơn vị giữ 01 bản.",
      "Theo đúng mẫu, rõ ràng, đủ và đúng theo yêu cầu công việc; không được để rách nát, nhòe chữ; cấm tẩy xóa. Lập thành 02 bản: Người cấp phiếu ký 02 bản, chuyển đến Người cho phép, Người chỉ huy trực tiếp mỗi người 01 bản. Người tham gia thực hiện PCT phải ký 02 bản, mỗi đơn vị giữ 01 bản.",
      "Cả 03 đáp án đều sai.",
    ],
    correctAnswer: 2,
  },
  {
    question: "PCT được lập thành mấy bản?",
    options: ["01 bản.", "02 bản.", "03 bản.", "04 bản."],
    correctAnswer: 1,
  },
  {
    question:
      "Tại hiện trường, sau khi kiểm tra đủ, đúng các biện pháp an toàn theo yêu cầu công việc của người cấp phiếu thì  phiếu công tác được bàn giao như thế nào?",
    options: [
      "Người cho phép giao 01 bản cho người chỉ huy trực tiếp và giữ lại 01 bản.",
      "Người cấp phiếu giao 01 bản cho người chỉ huy trực tiếp và giữ lại 01 bản.",
      "Người cho phép giữa cả 02 bản ",
      "Cả 3 đáp án đúng",
    ],
    correctAnswer: 0,
  },
  {
    question: "Cấp PCT điện tử phải thực hiện ?",
    options: [
      "Không xóa được sau khi đã có chữ ký điện tử của Người cấp phiếu trong thời hạn theo quy định.",
      "Không sửa được nội dung phần thuộc trách nhiệm hoặc có liên quan sau khi đã có chữ ký hoặc xác nhận điện tử của người tham gia thực hiện PCT",
      "Không hủy hoặc hoãn công tác sau khi đã có chữ ký hoặc xác nhận điện tử của Người chỉ huy trực tiếp.",
      "Cả 3 đáp án đúng",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Trong khi tiến hành công việc, nếu mở rộng phạm vi  làm việc thì?",
    options: [
      "Phải cấp PCT mới.",
      "Thực hiện PCT hiện hữu.",
      "Thực hiện LCT.",
      "Dđiều chỉnh trên PCT hiện hữu.",
    ],
    correctAnswer: 0,
  },
  {
    question: "Thời gian hiệu lực của Phiếu công tác?",
    options: [
      "Do người cấp phiếu ghi",
      "Kể từ thời điểm Người chỉ huy trực tiếp ký tiếp nhận hiện trường nơi làm việc đến thời điểm Người chỉ huy trực tiếp ký kết thúc công tác.",
      " Do người cấp phiếu ghi người cấp phiếu ghi nhưng không quá 3 tháng",
      "Không có thời hạn",
    ],
    correctAnswer: 1,
  },
  {
    question: "Sau khi hoàn thành công việc, PCT được?",
    options: [
      " Phiếu công tác được trả lại người cấp phiếu để kiểm tra,  lưu giữ it nhất 01 tháng.",
      "Trường hợp khi tiến hành công việc, nếu để xảy ra sự cố hoặc tai nạn thì Phiếu công tác phải được lưu trong hồ sơ điều tra sự cố, tai nạn lao động của đơn vị.",
      " Phiếu công tác được trả lại người cấp phiếu để kiểm tra, lưu giữ it nhất 03 tháng (kể cả những phiếu đã cấp nhưng không thực hiện)",
      "Cả 03 đáp án đều sai.",
    ],
    correctAnswer: 2,
  },
  {
    question: "LCT là?",
    options: [
      "Lệnh cho phép thực hiện công việc ở ĐD, thiết bị điện theo quy định.",
      "Lệnh bằng lời nói phải được ghi vào sổ.",
      "Lệnh bằng phần mềm quản lý LCT và phải được ghi âm.",
      "Cả 3 đáp án đúng",
    ],
    correctAnswer: 3,
  },
  {
    question: "Sau khi hoàn thành công việc,  LCT được lưu giữ như thế nào ?",
    options: [
      "LCT phải được lưu giữ ít nhất 03 tháng (kể cả những lệnh đã ban hành nhưng không thực hiện). Nếu xảy ra sự cố hoặc tai nạn thì các LCT liên quan phải được lưu trong hồ sơ điều tra sự cố, tai nạn lao động của đơn vị.",
      "Ít nhất 1,5 tháng",
      "Ít nhất 02 tháng",
      "Ít nhất 03 tháng",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Khi tiến hành công việc, nếu xảy ra sự cố hoặc tai nạn thì LCT phải được lưu?",
    options: [
      "ít nhất 01 tháng",
      "ít nhất 02 tháng",
      "ít nhất 03 tháng",
      "Lưu trong hồ sơ điều tra sự cố, tai nạn lao động của đơn vị.",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Những công việc cụ thể được thực hiện theo LCT do đơn vị nào quy định?",
    options: [
      "Đơn vị QLVH",
      "Đơn vị công tác phải có quy định cụ thể những công việc để thống nhất áp dụng trong đơn vị.",
      "Đơn vị làm công việc có quy định cụ thể những công việc để thống nhất.",
      "Khi khảo  sát hiện trường đơn vị làm việc và đơn vị quản lý vận hành thống nhất.",
    ],
    correctAnswer: 0,
  },
  {
    question: "Công việc thực hiện theo PCT ?",
    options: [
      "Công việc làm việc với ĐD/thiết bị điện cao áp: cắt điện, có điện hoặc gần phần có điêṇ cao áp (có thể vi phạm khoảng cách ATĐ).",
      "Công việc có mức độ rủi ro từ cấp 2 trở lên theo Quy định công tác an toàn trong EVN.",
      "Công việc làm việc với ĐD/thiết bị điện hạ áp: đại tu, sửa chữa lớn; thay, kéo dây đường trục; thay, chuyển cột điện, chuyển điểm đấu nối.",
      "Cả 3 đáp án đúng",
    ],
    correctAnswer: 3,
  },
  {
    question: "Các công việc thực hiện theo LCT bao gồm?",
    options: [
      "Công việc có mức độ rủi ro cấp 1 theo Quy định công tác an toàn trong EVN.",
      "Coogn việc làm việc ở xa nơi có điện; làm việc với ĐD/thiết bị điện hạ áp, trừ công việc thực hiện theo PCT theo quy định.",
      "Công việc không cần phải thực hiện các biện pháp kỹ thuật chuẩn bị vị trí làm việc.",
      "Cả 3 đáp án đúng",
    ],
    correctAnswer: 3,
  },
  {
    question: "Các chức danh trong PCT ?",
    options: [
      "Người cho phép; Người giám sát ATĐ; Người lãnh đạo công việc; Người chỉ huy trực tiếp; Nhân viên đơn vị công tác.",
      "Người cấp phiếu; Người giám sát ATĐ; Người lãnh đạo công việc; Người chỉ huy trực tiếp; Nhân viên đơn vị công tác.",
      "Người cấp phiếu, Người cho phép; Người giám sát ATĐ (nếu có); Người lãnh đạo công việc (nếu có); Người cảnh giới (nếu có); Người chỉ huy trực tiếp; Nhân viên đơn vị công tác.",
      "Người cấp phiếu; Người cho phép; Người giám sátATĐ; Người lãnh đạo công việc; Người chỉ huy trực tiếp.",
    ],
    correctAnswer: 2,
  },
  {
    question: "Có mấy chức danh trong PCT ?",
    options: ["05 chức danh", "06 chức danh.", "07 chức danh", "04 chức danh"],
    correctAnswer: 2,
  },
  {
    question:
      "Trong 01 PCT, Người cho phép được phép kiêm nhiệm chức danh Người chỉ huy trực tiếp không ? ",
    options: [
      "Được kiêm nhiệm ",
      "Không được kiêm nhiệm ",
      "Được kiêm nhiệm nhưng không được phép quá 03 chức danh.",
      "Cả 3 đáp án đúng",
    ],
    correctAnswer: 1,
  },
  {
    question: "LCT có các chức danh? ",
    options: [
      "a) Người ra lệnh;\nb) Người giám sát ATĐ (nếu có).;\n",
      "c) Người chỉ huy trực tiếp (khi tổ chức thành đơn vị công tác), Người thi hành lệnh (khi thực hiện công việc một mình);\n",
      "d) Nhân viên đơn vị công tác.",
      "Cả 3 đáp án đúng",
    ],
    correctAnswer: 3,
  },
  {
    question: " Trong 01 LCT, 01 người được phép đảm nhận bao nhiêu chức danh?",
    options: [
      "Người ra lệnh kiêm Người chỉ huy trực tiếp nếu Đơn vị QLVH và Đơn vị công tác là một đơn vị.",
      "Người ra lệnh kiêm Người giám sát ATĐ.",
      "Người chỉ huy trực tiếp kiêm Nhân viên đơn vị công tác nhưng vẫn chịu trách nhiệm đảm bảo giám sát an toàn. Trường hợp này không cho phép Người chỉ huy trực tiếp kiêm Người ra lệnh.",
      "Cả 3 đáp án đúng",
    ],
    correctAnswer: 3,
  },
  {
    question: "Quy định về Người cấp PCT ?",
    options: [
      "Người cấp phiếu phải là người của Đơn vị QLVH",
      "Nắm vững về vận hành lưới điện hoặc nhà máy điện do đơn vị mình trực tiếp quản lý, biết được nội dung công việc, điều kiện đảm bảo ATĐ để đề ra đủ, đúng các biện pháp an toàn cho Đơn vị công tác",
      "Có bậc 5 an toàn điện và được công nhận chức danh “Người cấp phiếu công tác”",
      "Cả 3 đáp án đúng",
    ],
    correctAnswer: 3,
  },
  {
    question: "Những người được quyền cấp PCT?",
    options: [
      "Đối với công tác có kế hoạch: Người cấp phiếu là Giám đốc/Phó giám đốc, Trưởng/Phó đơn vị/đội/tổ, Quản đốc/Phó quản đốc phân xưởng vận hành hoặc người được giao nhiệm vụ.",
      "Đối với công tác ngoài kế hoạch: Người cấp phiếu là Giám đốc/Phó giám đốc, Trưởng/Phó đơn vị/đội/tổ, Quản đốc/Phó quản đốc phân xưởng vận hành, Kỹ thuật viên hoặc người được giao nhiệm vụ, Nhân viên vận hành ca trực có chức danh Trưởng ca/Trưởng kíp.",
      "Đối với công tác xử lý sự cố: Người cấp phiếu là Nhân viên vận hành ca trực có chức danh Trưởng ca/Trưởng kíp hoặc người được giao nhiệm vụ.",
      "Cả 3 đáp án đúng",
    ],
    correctAnswer: 3,
  },
  {
    question: "Trách nhiệm của người cấp PCT ?",
    options: [
      'Ghi vào "Mục 1 -Cấp cho" của Phiếu công tác (có thể soạn thảo trên máy tính), ký cấp phiếu và giao phiếu cho người cho phép, kiểm tra và ký hoàn thành Phiếu công tácngay sau khi nhận lại từ người cho phép.',
      "Khi giao phiếu cho người cho phép phải chỉ dẫn những yêu cầu cụ thể và những yếu tố nguy hiểm về an toàn điện tại nơi làm việc để người cho phép hướng dẫn cho đơn vị công tác khi thực hiện việc cho phép làm việc để đảm bảo an toàn.",
      "Chuẩn bị PCT với đầy đủ các nội dung, biện pháp an toàn phải thực hiện phù hợp với đăng ký công tác, ký cấp PCT.\nGiao phiếu, chỉ dẫn những yêu cầu cụ thể và những yếu tố nguy hiểm để thực hiện công việc.\nKiểm tra và ký hoàn thành PCT ngay sau khi nhận lại.",
      "Cả 03 đáp án đều sai",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "Ai là người chịu trách nhiệm kiểm tra danh sách, bậc an toàn điện của nhân viên đơn vị công tác và người giám sát an toàn điện (nếu có) có mặt tại nơi làm việc theo đúng với đăng ký của đơn vị làm công việc?",
    options: [
      "Người chỉ huy trực tiếp",
      "Người lãnh đạo Công việc",
      "Người cho phép.",
      "Người giám sát an toàn điện",
    ],
    correctAnswer: 2,
  },
  {
    question: " Người cho phép có trách nhiệm kiểm tra?",
    options: [
      "Kiểm tra việc thực hiện đủ, đúng các biện pháp an toàn tại hiện trường thuộc trách nhiệm của mình để chuẩn bị chỗ làm việc cho Đơn vị công tác theo các nội dung yêu cầu của Người cấp phiếu, đánh dấu những việc đã làm vào PCT.",
      "Kiểm tra việc thực hiện đủ, đúng các biện pháp an toàn tại hiện trường thuộc trách nhiệm của mình để chuẩn bị chỗ làm việc cho đơn vị công tác.",
      "Kiểm tra danh sách, bậc an toàn điện của nhân viên đơn vị công tác và người giám sát an toàn điện (nếu có) có mặt tại nơi làm việc theo đúng với đăng ký của đơn vị làm công việc.",
      "Cả 3 đáp án đúng",
    ],
    correctAnswer: 0,
  },
  {
    question: "Người cho phép có trách nhiệm chỉ dẫn? ",
    options: [
      "Chỉ dẫn cho Đơn vị công tác nơi làm việc",
      "Chỉ dẫn phạm vi được phép làm việc.",
      " Chỉ dẫn những nơi (phần, thiết bị) có điện gần nơi làm việc; cảnh báo những nguy hiểm, rủi ro về an toàn cho Người chỉ huy trực tiếp và Người giám sát ATĐ (nếu có) để họ biết và phòng tránh.",
      "Cả 3 đáp án đúng",
    ],
    correctAnswer: 3,
  },
  {
    question: "Trách nhiệm của người cho phép? ",
    options: [
      "Kiểm tra việc thực hiện đủ, đúng các biện pháp an toàn tại hiện trường thuộc trách nhiệm của mình để chuẩn bị chỗ làm việc cho Đơn vị công tác theo các nội dung yêu cầu của Người cấp phiếu, đánh dấu những việc đã làm vào PCT.",
      "Chỉ dẫn cho Đơn vị công tác nơi làm việc, phạm vi được phép làm việc, những nơi (phần, thiết bị) có điện gần nơi làm việc; cảnh báo những nguy hiểm, rủi ro về an toàn cho Người chỉ huy trực tiếp và Người giám sát ATĐ (nếu có) để họ biết và phòng tránh.\nGhi thời gian bàn giao hiện trường, ký cho phép vào làm việc.\nThực hiện và ghi vào PCT khi công tác nghỉ qua ngày hoặc chuyển vị trí công tác.",
      "Tiếp nhận nơi làm việc do Người chỉ huy trực tiếp bàn giao khi Đơn vị công tác kết thúc công việc; kiểm tra nội dung công việc, nơi làm việc, ký khóa PCT và thông báo cho các đơn vị liên quan, giao lại PCT cho Người cấp phiếu.",
      "Cả 3 đáp án đúng",
    ],
    correctAnswer: 3,
  },
  {
    question: "Người cho phép phải đạt yêu cầu nào?",
    options: [
      "Người cho phép phải là nhân viên vận hành đang làm nhiệm vụ trong ca trực.",
      "Có bậc 4 ATĐ trở lên được Đơn vị QLVH giao nhiệm vụ giao nhận hiện trường với Đơn vị công tác",
      "Người cho phép phải là nhân viên vận hành đang làm nhiệm vụ trong ca trực. Có bậc 4 an toàn điện trở lên và được công nhận chức danh “Người cho phép”.",
      "Cả 03 đáp án đều sai",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Trường hợp nào phải cử người giám sát ATĐ riêng cho đơn vị công tác? ",
    options: [
      "Đơn vị công tác làm các công việc không có chuyên môn về điện như nề, mộc, cơ khí nhưng có yếu tố nguy hiểm có thể dẫn đến tai nạn điện trong khi làm việc mà Người chỉ huy trực tiếp không thể giám sát ATĐ được.",
      "Đơn vị công tác làm các công việc căng, kéo dây, lấy độ võng ĐDK giao chéo ở phía dưới hoặc gần ĐDK đang vận hành và làm việc ở những nơi đặc biệt nguy hiểm về điện.",
      "Trường hợp làm việc có yếu tố nguy hiểm có thể dẫn đến tai nạn điện trong khi làm việc đối với Đơn vị công tác mà Người chỉ huy trực tiếp không thể giám sát\nATĐ được.",
      "Cả 3 đáp án đúng  ",
    ],
    correctAnswer: 3,
  },
  {
    question: "Quy định về Người giám sát ATĐ ?",
    options: [
      "Là người của đơn vị QLVH.  Có bậc 5 ATĐ trở lên và được công nhận chức danh “Người giám sát ATĐ”",
      "Người có bậc 4 ATĐ trở lên, được Đơn vị công tác hoặc Đơn vị QLVH cử để làm nhiệm vụ giám sát ATĐ cho Đơn vị công tác",
      "Là người của đơn vị làm công việc.  Có bậc 4 ATĐ trở lên và được công nhận chức danh “Người giám sát ATĐ” và được công nhận chức danh “Người giám sát ATĐ”",
      "Là người đơn vị quản lý vận hành cử để làm nhiệm vụ giám sát ATĐ cho đơn vị công tác.  Có bậc 4ATĐ trở lên và được công nhận chức danh “Người giám sát ATĐ”. ",
    ],
    correctAnswer: 1,
  },
  {
    question: "Trách nhiệm của người giám sát ATĐ trong PCT ?",
    options: [
      "Có mặt liên tục tại nơi làm việc để làm nhiệm vụ giám sát ATĐ (cho đến khi hoàn thành phần nhiệm vụ được phân công) và không làm bất cứ việc gì khác ngoài nhiệm vụ giám sát ATĐ.",
      "Nắm vững các quy định và những yêu cầu về ATĐ tại nơi làm việc để giám sát Đơn vị công tác đảm bảo ATĐ.",
      "Tiếp nhận nơi làm việc cùng với Người chỉ huy trực tiếp, kiểm tra và thực hiện (nếu có) các biện pháp an toàn đã đủ và đúng, ký tên vào PCT hoặc LCT.",
      "Cả 3 đáp án đúng ",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Từ khi tiếp nhận nơi làm việc người giám sát ATĐ  phải làm các việc nào sau đây?",
    options: [
      "Được kiêm nhiệm các chức danh khác, tiếp nhận nơi làm việc do người cho phép giao. Có mặt liên tục tại nơi làm việc để giám sát và không được làm bất cứ việc gì thêm",
      "Có mặt liên tục tại nơi làm việc để làm nhiệm vụ giám sát ATĐ (cho đến khi hoàn thành phần nhiệm vụ được phân công) và không làm bất cứ việc gì khác ngoài nhiệm vụ giám sát ATĐ.",
      "Phải theo dõi không để tháo dỡ hoặc di chuyển các biển báo, rào chắn, việc tháo các rào chắn, biển báo người giám sát có thể tự làm. Chịu trách nhiệm không để xảy ra tai nạn về điện",
      "Cả 3 đáp án đúng",
    ],
    correctAnswer: 1,
  },
  {
    question: "Quy định Người lãnh đạo công việc?",
    options: [
      "Phải có bậc 5 an toàn điện và được công nhận chức danh “Người lãnh đạo công việc” do đơn vị làm công việc cử.",
      "Chịu trách nhiệm phối hợp hoạt động của các đơn vị công tác, khi công việc do nhiều đơn vị công tác của cùng một tổ chức hoạt động điện lực thực hiện theo các Phiếu công tác để đảm bảo an toàn.",
      "Phải có bậc 5 ATĐ do Cấp có thẩm quyền của Đơn vị công tác cử. Trường hợp các Đơn vị công tác không cùng một tổ chức hoạt\nđộng điện lực, Đơn vị QLVH và các Đơn vị công tác phải thống nhất phải cử Người LĐCV.",
      "Cả  03 đáp án đều sai",
    ],
    correctAnswer: 2,
  },
  {
    question: "Các trường hợp cần có Người cảnh giới trong PCT.",
    options: [
      "Biển báo, rào chắn, căng dây hoặc các biện pháp khác chưa đủ đảm bảo an toàn cho cộng đồng.",
      "Công việc thực hiện có thể gây nguy hiểm cho cộng đồng.",
      "Người chỉ huy trực tiếp không đủ khả năng kiêm nhiệm vai trò Người cảnh giới.",
      "Cả 3 đáp án đúng",
    ],
    correctAnswer: 1,
  },
  {
    question: "Trách nhiệm của Người cảnh giới",
    options: [
      "Cùng với Người chỉ huy trực tiếp tiếp nhận và phải luôn có mặt tại vị trí cần cảnh giới để bảo đảm an toàn cho người dân; đồng thời phối hợp với Người chỉ huy trực tiếp để thực hiện công việc bảo đảm an toàn cho người dân.",
      "Cùng với Người chỉ huy trực tiếp tiếp nhận và phải luôn có mặt tại vị trí cần cảnh giới để bảo đảm an toàn cho cộng đồng; phối hợp với Người chỉ huy trực tiếp để thực hiện công việc bảo đảm an toàn cho cộng đồng.",
      "Cùng với Người chỉ huy trực tiếp tiếp nhận và phải luôn có mặt tại vị trí cần cảnh giới để bảo đảm an toàn cho xe cộ qua lại; đồng thời phối hợp với Người chỉ huy trực tiếp để thực hiện công việc bảo đảm an toàn cho xe cộ qua lại.",
      "Cùng với Người chỉ huy trực tiếp tiếp nhận và phải luôn có mặt tại vị trí cần cảnh giới để bảo đảm an toàn cho phương tiện qua lại; đồng thời phối hợp với Người chỉ huy trực tiếp để thực hiện công việc bảo đảm an toàn cho phương tiện qua lại.",
    ],
    correctAnswer: 1,
  },
  {
    question: "Quy định đối với người ra LCT?",
    options: [
      "Phải nắm vững về vận hành lưới điện hoặc nhà máy điện do đơn vị mình trực tiếp quản lý",
      "Biết được nội dung công việc, điều kiện đảm bảo ATĐ khi tiến hành công việc.",
      "Có bậc 4 ATĐ trở lên, bao gồm: Trưởng/Phó đơn vị/tổ/đội, Quản đốc/Phó quản đốc phân xưởng vận hành, Nhân viên vận hành ca trực có chức danh Trưởng ca/Trưởng kíp hoặc người được giao nhiệm vụ.",
      "Cả 3 đáp án đúng. ",
    ],
    correctAnswer: 3,
  },
  {
    question: "Trách nhiệm của người ra LCT ?",
    options: [
      "Phải chỉ dẫn những điều có liên quan đến công việc và các yếu tố nguy hiểm tại hiện trường cho Người chỉ huy trực tiếp (hoặc Người thi hành lệnh), Người giám sát ATĐ (nếu có) để đảm bảo an toàn khi thực hiện công việc.",
      "Khi ra LCT phải ghi đầy đủ các nội dung của LCT, trực tiếp ký và giao LCT cho Người chỉ huy trực tiếp (hoặc Người thi hành lệnh); tiếp nhận lại LCT giấy, kiểm tra, ký sau khi hoàn thành công việc.",
      "Tiếp nhận báo cáo kết quả, thời gian hoàn thành sau khi thực hiện xong công việc từ Người chỉ huy trực tiếp (hoặc Người thi hành lệnh) và ghi vào sổ LCT theo quy định.",
      "Cả 3 đáp án đúng. ",
    ],
    correctAnswer: 3,
  },
  {
    question: "Quy định Người chỉ huy trực tiếp?",
    options: [
      "Được Đơn vị công tác cử để thực hiện công việc. ",
      "Phải nắm vững thời gian, địa điểm, nội dung công việc được giao và các biện pháp an toàn phù hợp với yêu cầu của công việc",
      "Có bậc 4 ATĐ trở lên khi thực hiện PCT, bậc 3 ATĐ trở lên khi thực hiện LCT đối với công việc về điện (không yêu cầu bậc ATĐ đối với công việc không có chuyên môn về điện).",
      "Cả 3 đáp án đúng. ",
    ],
    correctAnswer: 3,
  },
  {
    question: "Người chỉ huy trực tiếp có những trách nhiệm nào ?",
    options: [
      "Trách nhiệm phối hợp; trách nhiệm phân công công việc; trách nhiệm giám sát; trách nhiệm nhận và trả hiện trường công tác.",
      "Trách nhiệm kiểm tra sơ bộ sức khỏe công nhân; Trách nhiệm giải thích",
      "Phải hiểu rõ nội dung công việc được giao, các biện pháp an toàn phù hợp với công việc và có trách nhiệm kiểm tra.",
      "Cả 3 đáp án đúng. ",
    ],
    correctAnswer: 3,
  },
  {
    question: "Trách nhiệm phối hợp của người chỉ huy trực tiếp?",
    options: [
      "Phải hợp tác chặt chẽ với Người cấp phiếu, Người cho phép, chịu sự chỉ huy về an toàn của Người lãnh đạo công việc (nếu có).",
      "Phối hợp với Người giám sát ATĐ để đảm bảo công tác an toàn và gìn giữ an toàn cho Nhân viên đơn vị công tác.",
      "Phối hợp với Người cảnh giới để đảm bảo công tác an toàn và gìn giữ an toàn cho cộng đồng.",
      "Cả 3 đáp án đúng. ",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Trách nhiệm kiểm tra nội dung công việc của người chỉ huy trực tiếp?",
    options: [
      "Kiểm tra, tiếp nhận biện pháp an toàn do Người cho phép bàn giao và thực hiện đầy đủ các biện pháp an toàn cần thiết khác.",
      "Việc chấp hành các quy định về an toàn của Nhân viên đơn vị công tác. Biện pháp an toàn trong khi làm việc và phổ biến cho tất cả Nhân viên đơn vị công tác biết.",
      "Chất lượng của các dụng cụ, trang bị an toàn sử dụng trong khi làm việc. Kiểm tra thời hạn thử nghiệm cho phép sử dụng của máy, thiết bị, vật tư có yêu cầu nghiêm ngặt về an toàn lao động.",
      "Cả 3 đáp án đúng. ",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Trách nhiệm của Người chỉ huy trực tiếp kiểm tra sơ bộ sức khỏe nhân viên đơn vị công tác?",
    options: [
      "Trước khi bắt đầu công việc, người chỉ huy trực tiếp phải kiểm tra sơ bộ tình hình sức khỏe, thể trạng của nhân viên đơn vị công tác. ",
      "Khi xét thấy sẽ có khó khăn cho nhân viên đơn vị công tác thực hiện công việc một cách bình thường thì không được để nhân viên đơn vị công tác đó tham gia vào công việc.",
      "Trước khi bắt đầu công việc, Người chỉ huy trực tiếp phải kiểm tra sơ bộ tình hình sức khỏe, thể trạng của Nhân viên đơn vị công tác. Khi xét thấy sẽ có khó khăn cho Nhân viên đơn vị công tác thực hiện công việc một cách bình thường thì không được để Nhân viên đơn vị công tác đó tham gia vào công việc.",
      "Cả 3 đáp án đều sai.",
    ],
    correctAnswer: 2,
  },
  {
    question: "Trách nhiệm giải thích của người chỉ huy trực tiếp?",
    options: [
      "Trước khi cho đơn vị công tác vào làm việc người chỉ huy trực tiếp phải giải thích cho nhân viên đơn vị công tác về các biện pháp an toàn.",
      "Trước khi cho đơn vị công tác vào làm việc người chỉ huy trực tiếp phải giải thích cho nhân viên đơn vị công tác về nội dung, trình tự để thực hiện công việc.",
      "Trước khi cho Đơn vị công tác vào làm việc Người chỉ huy trực tiếp phải giải thích cho Nhân viên đơn vị công tác về nội dung, trình tự để thực hiện công việc và các biện pháp an toàn.",
      "Giải thích cho nhân viên đơn vị công tác về nội dung, trình tự để thực hiện công việc và các biện pháp an toàn.",
    ],
    correctAnswer: 2,
  },
  {
    question: "Trách nhiệm giám sát của người chỉ huy trực tiếp?",
    options: [
      "Phải có mặt liên tục tại nơi làm việc, giám sát và có biện pháp để Nhân viên đơn vị công tác không thực hiện những hành vi có thể gây tai nạn trong quá trình làm việc.",
      "Giám sát nhân viên đơn vị công tác không thực hiện những hành vi có thể gây tai nạn trong quá trình làm việc.",
      "Có biện pháp để nhân viên đơn vị công tác không thực hiện những hành vi có thể gây tai nạn trong quá trình làm việc.",
      "Có mặt liên tục tại nơi làm việc, giám sát và có biện pháp đối với nhân viên đơn vị công tác.",
    ],
    correctAnswer: 0,
  },
  {
    question: " Trách nhiệm giám sát của người chỉ huy trực tiếp?",
    options: [
      "Phải có mặt liên tục tại nơi làm việc",
      "Giám sát và có biện pháp để nhân viên đơn vị công tác không thực hiện những hành vi có thể gây tai nạn trong quá trình làm việc.",
      "Phải có mặt liên tục tại nơi làm việc, giám sát và có biện pháp để Nhân viên đơn vị công tác không thực hiện những hành vi có thể gây tai nạn trong quá trình làm việc.",
      "Cả 3 đáp án đều sai.",
    ],
    correctAnswer: 2,
  },
  {
    question: "Quy định của người thi hành lệnh?",
    options: [
      "Phải nắm vững thời gian, địa điểm, nội dung công việc được giao và các biện pháp an toàn phù hợp với yêu cầu của công việc",
      "Được Đơn vị công tác cử để thực hiện công việc.",
      "Có bậc 3 ATĐ trở lên.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question: "Trách nhiệm của Người thi hành LCT ?",
    options: [
      "Nhận lệnh công tác từ người ra lệnh, phải đọc kỹ nội dung LCT, nếu thấy bất thường hoặc chưa rõ thì phải hỏi lại ngay người ra lệnh và chuẩn bị, kiểm tra chất lượng của các dụng cụ, trang bị an toàn sử dụng trong khi làm việc.",
      "Kiểm tra và thực hiện các biện pháp an toàn để tiến hành công việc và ghi thời gian bắt đầu/ kết thúc vào LCT.",
      "Khi thực hiện xong công việc, Người thi hành lệnh phải ghi kết quả, thời gian hoàn thành vào LCT hoặc sổ của mình; báo cáo với người ra lệnh để biết và ghi vào sổ LCT theo quy định.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question: "Quy định về Nhân viên Đơn vị công tác?",
    options: [
      "Phải được huấn luyện về an toàn phù hợp với công việc được giao.",
      "Phải được huấn luyện về an toàn thiết bị máy móc phù hợp với công việc được giao",
      "Phải được đào tạo về quy trình vận hành thiết bị máy móc phù hợp với công việc được giao",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 0,
  },
  {
    question: "Nguyên tắc cử nhân viên đơn vị công tác?",
    options: [
      "Do người lãnh đạo công việc cử ",
      "Do người được giao nhiệm vụ trực tiếp quản lý nhân viên của đơn vị công tác cử tham gia thực hiện công tác.",
      "Nhân viên đơn vị công tác do Trưởng phòng Tổ chức & Nhân sự cử ",
      "Nhân viên đơn vị công tác do Trưởng phòng Kỹ thuật cử ",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Những nội dung nào sau đây thuộc trách nhiệm của Nhân viên đơn vị công tác?",
    options: [
      "Đảm bảo tốt thể chất và tinh thần để làm việc. Chủ động báo cáo với Người chỉ huy trực tiếp tình trạng sức khỏe của mình để được giao công việc phù hợp.",
      "Phải nắm vững những yêu cầu về an toàn có liên quan đến công việc.",
      "Tự kiểm tra và bảo đảm đầy đủ phương tiện bảo vệ cá nhân.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Nhiệm vụ của Nhân viên đơn vị công tác khi thực hiện theo PCT hoặc LCT ?",
    options: [
      "Khi đến nơi làm việc, sau khi nghe phổ biến nhiệm vụ công việc, phạm vi được phép làm việc, các yếu tố nguy hiểm cần phòng tránh, có thể hỏi lại Người chỉ huy trực tiếp về những nội dung chưa rõ. ",
      "Khi thấy các điều kiện đảm bảo an toàn để làm việc chưa đủ và đúng phải báo cáo ngay với Người chỉ huy trực tiếp để xem xét giải quyết.",
      "Ký vào PCT/LCT khi đến làm việc và rút khỏi nơi làm việc trong trường hợp đang thực hiện công việc.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question: "Nhân viên Đơn vị công tác có trách nhiệm nào sau đây?",
    options: [
      "Chấp hành nghiêm nhiệm vụ được phân công, tuân thủ hướng dẫn của Nguời chỉ huy trực tiếp và không làm những việc mà Người chỉ huy trực tiếp không giao. ",
      "Nhận biết được các yếu tố nguy hiểm, có trách nhiệm tự bảo vệ để đảm bảo an toàn khi làm việc. Khi không thể thực hiện được công việc theo lệnh của Người chỉ huy trực tiếp, hoặc nhận thấy nguy hiểm, thiếu an toàn nếu thực hiện công việc đó theo lệnh, Nhân viên đơn vị công tác được phép ngừng ngay công việc và báo cáo Người chỉ huy trực tiếp, nếu không được chấp thuận thì báo cáo lên Cấp có thẩm quyền để giải quyết.",
      "Chỉ được làm việc trong phạm vi cho phép. Không được tự ý mở rộng phạm vi làm việc, vào các vùng cấm vào hoặc các vùng có nguy cơ xảy ra tai nạn đã được cảnh báo trước đó.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Thủ tục cho phép và tiếp nhận hiện trường cho Đơn vị công tác được thực hiện theo quy định nào sau đây?",
    options: [
      "Người cho phép hướng dẫn cho Người chỉ huy trực tiếp, Người giám sát ATĐ (nếu có) biết phạm vi được phép làm việc và các cảnh báo, chỉ dẫn các yếu tố nguy hiểm để đảm bảo an toàn cho Đơn vị công tác. ",
      "Người chỉ huy trực tiếp và Người giám sát ATĐ (nếu có) kiểm tra và xác nhận Người cho phép đã thực hiện đủ yêu cầu theo PCT, đồng ý tiếp nhận hiện trường công tác và ký, ghi họ tên vào PCT.",
      "Sau khi PCT đã có chữ ký của Người cho phép cho phép làm việc Người chỉ huy trực tiếp được quyền chỉ huy điều hành Đơn vị công tác thực hiện các công việc trong phạm vi cho phép làm việc theo PCT.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Người cho phép để thực hiện cho phép làm việc phải làm những việc nào cho Người chỉ huy trực tiếp, Người giám sát ATĐ (nếu có)?",
    options: [
      "hướng dẫn cho Người chỉ huy trực tiếp, Người giám sát ATĐ (nếu có) biết phạm vi được phép làm việc.",
      "Hướng dẫn cho Người chỉ huy trực tiếp, Người giám sát ATĐ (nếu có) biết các cảnh báo, chỉ dẫn các yếu tố nguy hiểm để đảm bảo an toàn cho Đơn vị công tác. ",
      "Nếu làm việc có cắt điện, phải chứng minh là không còn điện ở các phần\nđã được cắt điện.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Khi nào thì Người cho phép và Người giám sát ATĐ (nếu có) , đồng ý tiếp nhận hiện trường công tác",
    options: [
      "Kiểm tra và xác nhận người cho phép đã thực hiện đủ yêu cầu theo PCT",
      "Đồng ý tiếp nhận hiện trường công tác và ký, ghi họ tên vào PCT",
      "Kiểm tra và xác nhận Người cho phép đã thực hiện đủ yêu cầu theo PCT.",
      "Cả 3 đáp án đều sai.",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "Người chỉ huy trực tiếp được quyền chỉ huy điều hành Đơn vị công tác thực hiện các công việc trong phạm vi cho phép làm việc theo PCT khi nào?",
    options: [
      "Sau khi PCT đã có chữ ký của Người cho phép.",
      "Đã kiểm tra và thực hiện đủ, đúng các biện pháp an toàn theo yêu cầu nhiệm vụ công việc",
      "Nhận được sự cho phép và Phiếu công tác của người cho phép. ",
      "Thực hiện đủ, đúng các biện pháp an toàn theo yêu cầu nhiệm vụ công việc",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Giám sát ATĐ và an toàn trong khi làm việc đối với tất cả Nhân viên Đơn vị công tác thuộc trách nhiệm của Người nào?",
    options: [
      "Người lãnh đạo công việc.",
      "Người chỉ huy trực tiếp.",
      "Người giám sát an toàn điện.",
      "Toàn bộ đơn vị công tác.",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Khi công việc phải cử người giám sát ATĐ thì việc giám sát ATĐ cho tất cả Nhân viên đơn vị công tác thuộc về trách nhiệm của?",
    options: [
      "Người lãnh đạo công việc.",
      "Người chỉ huy trực tiếp.",
      " Người giám sát ATĐ.",
      "Toàn bộ đơn vị công tác.",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "Nếu để xảy ra mất an toàn do lỗi không thực hiện giám sát Nhân viên đơn vị công tác trong khi tiến hành công việc thì ai phải chịu hoàn toàn trách nhiệm trước pháp luật?",
    options: [
      "Người chỉ huy trực tiếp và người giám sát ATĐ (nếu có). ",
      "Người chỉ huy trực tiếp.",
      "Người giám sát ATĐ.",
      "Người lãnh đạo công việc.",
    ],
    correctAnswer: 0,
  },
  {
    question: "Nghỉ giải lao thực hiện theo quy định nào sau đây?",
    options: [
      "Tất cả nhân viên trong đơn vị công tác phải dừng làm việc, các biện pháp an toàn phải được giữ nguyên. Các nhân viên vẫn phải chịu sự giám sát của người chỉ huy trực tiếp.",
      "Nhân viên đơn vị công tác không được tự ý trở lại làm việc khi chưa có lệnh của Người chỉ huy trực tiếp. ",
      "Người chỉ huy trực tiếp, Người giám sát ATĐ (nếu có) chỉ được cho nhân viên vào làm việc khi đã kiểm tra các biện pháp an toàn còn đủ và đúng.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question: "Khi nghỉ giải lao quy định nào sau đây không đúng?",
    options: [
      "Tất cả nhân viên trong đơn vị công tác phải dừng làm việc, các biện pháp an toàn phải được giữ nguyên. ",
      "Các nhân viên không còn chịu sự giám sát của người chỉ huy trực tiếp.",
      "Nhân viên đơn vị công tác không được tự ý trở lại làm việc khi chưa có lệnh của Người chỉ huy trực tiếp. ",
      "Người chỉ huy trực tiếp, Người giám sát ATĐ (nếu có) chỉ được cho nhân viên vào làm việc khi đã kiểm tra các biện pháp an toàn còn đủ và đúng.",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Nếu công việc phải kéo dài nhiều ngày thì sau mỗi ngày làm việc, Đơn vị công tác phải thực hiện quy định nào?",
    options: [
      "Phải thu dọn nơi làm việc. ",
      "Các biện pháp an toàn phải được giữ nguyên. ",
      "Người chỉ huy trực tiếp phải giao lại PCT giấy hoặc xác nhận điện tử những việc liên quan cho Người cho phép, đồng thời hai bên phải cùng ký hoặc ghi tên vào PCT.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Nếu công việc phải kéo dài nhiều ngày thì khi bắt đầu công việc ngày tiếp theo phải thực hiện quy định nào?",
    options: [
      'Người cho phép phải kiểm tra lại các biện pháp an toàn và thực hiện việc cho phép làm việc, ghi vào Mục 5 "Cho phép làm việc và kết thúc công tác hàng ngày" của PCT.',
      ' Người chỉ huy trực tiếp phải kiểm tra lại các biện pháp an toàn và thực hiện việc cho phép làm việc, ký vào Mục 5 "Cho phép làm việc và kết thúc công tác hàng ngày" của PCT.',
      " Người cho phép và Người chỉ huy trực tiếp phải kiểm tra lại các biện pháp an toàn và thực hiện việc cho phép làm việc, ký hoặc ghi tên vào PCT.",
      " Người cho phép và người chỉ huy trực tiếp phải kiểm tra lại các biện pháp an toàn.",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "Nếu công việc phải kéo dài nhiều ngày thì sau mỗi ngày làm việc, Người chỉ huy trực tiếp được phép giữ lại Phiếu công tác trong trường hợp nào?",
    options: [
      "Trường hợp làm việc trên ĐD hoặc nơi làm việc ở quá xa nơi trực vận hành và được sự thống nhất từ trước giữa Đơn vị công tác với Đơn vị QLVH.",
      "Trường hợp làm việc tại trạm biến áp KNT, nếu nơi làm việc ở quá xa nơi trực vận hành và được sự thống nhất từ trước giữa đơn vị làm công việc với đơn vị quản lý vận hành.",
      "Trường hợp làm việc tại trạm biến áp KNT, nếu nơi làm việc ở quá xa nơi trực vận hành.",
      "Trường hợp làm việc trên ĐD, nếu nơi làm việc ở quá xa nơi trực vận hành.",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Trường hợp xảy ra tai nạn hoặc sự cố, Người chỉ huy trực tiếp và Nhân viên đơn vị công tác phải thực hiện những quy định nào ?",
    options: [
      "Ngừng ngay công việc",
      "Áp dụng các biện pháp thích hợp để ngăn ngừa các tai họa khác và không được đến gần thiết bị hư hỏng nếu có nguy hiểm.",
      "Sơ cấp cứu người bị nạn và liên hệ ngay với các cơ sở y tế gần nhất; đồng thời thông báo ngay cho các tổ chức có liên quan về trường hợp tai nạn.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Trong những trường hợp nào thì Đơn vị công tác phải tạm dừng công việc ?",
    options: [
      "Người chỉ huy trực tiếp hoặc Người giám sát ATĐ hoặc Người cảnh giới không thể thực hiện đầy đủ trách nhiệm của mình hoặc phải rời khỏi hiện trường và không có người thay thế.",
      "Nghỉ giải lao. Thay đổi thời tiết không bảo đảm an toàn để tiếp tục làm việc.",
      "Xuất hiện yếu tố nguy hiểm mới; xảy ra tai nạn, sự cố liên quan đến hiện trường công tác.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Việc quyết định thay đổi người (kể cả Người lãnh đạo công việc, Người chỉ huy trực tiếp, Người giám sát ATĐ) hoặc số lượng nhân viên Đơn vị công tác thuộc trách nhiệm người nào?",
    options: [
      "Do người có trách nhiệm của Đơn vị công tác quyết định và Người chỉ huy trực tiếp phải xin ý kiến Người cho phép.",
      "Do những người có trách nhiệm của đơn vị làm công việc quyết định và đồng thời phải được người chỉ huy trực tiếp đồng ý. ",
      "Do những người có trách nhiệm của đơn vị làm công việc quyết định và đồng thời phải được người cho phép đồng ý. ",
      "Do những người có trách nhiệm của đơn vị làm công việc quyết định và đồng thời phải được Trạm trưởng TBA đồng ý. ",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Quy định về PCT đối với biện pháp tổ chức thực hiện công tác thí nghiệm ĐD, thiết bị điện",
    options: [
      "Có PCT riêng",
      "Có Người lãnh đạp công việc chịu trách nhiệm.",
      "Phối hợp an toàn giữa các đơn vị trong quá trình thí nghiệm.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Khi kết thúc công việc, Người chỉ huy trực tiếp  trong phiếu công tác phải?",
    options: [
      "Trực tiếp kiểm tra lại các công việc đã hoàn thành, việc thu dọn, vệ sinh nơi làm việc và kiểm tra, xem xét lại để hoàn thiện tất cả những việc có liên quan.",
      "Ra lệnh cho Nhân viên đơn vị công tác rút khỏi vị trí công tác, chỉ để lại những người tháo nối đất, tháo gỡ những biện pháp an toàn do Đơn vị công tác làm.",
      "Ký vào PCT (02 bản PCT giấy), trao trả nơi làm việc và PCT cho Người cho phép để tiếp nhận, kiểm tra nơi làm việc.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question:
      " Khi kết thúc công việc, Người chỉ huy trực tiếp không cần thực hiện việc nào sau đây?",
    options: [
      "Kiểm tra xác định nơi làm việc đã hết điện và làm nối đất di động tại hiện trường (nếu làm việc có cắt điện) sao cho toàn bộ đơn vị công tác nằm trọn trong vùng bảo vệ của nối đất.",
      "Trực tiếp kiểm tra lại các công việc đã hoàn thành, việc thu dọn, vệ sinh nơi làm việc và kiểm tra, xem xét lại để hoàn thiện tất cả những việc có liên quan.",
      "Ra lệnh cho Nhân viên đơn vị công tác rút khỏi vị trí công tác, chỉ để lại những người tháo nối đất, tháo gỡ những biện pháp an toàn do Đơn vị công tác làm.",
      "Ký vào PCT (02 bản PCT giấy), trao trả nơi làm việc và PCT cho Người cho phép để tiếp nhận, kiểm tra nơi làm việc.",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Trong quá trình trao trả nơi làm việc, nếu phát hiện thấy có thiếu sót phải sửa chữa lại ngay thì Người chỉ huy trực tiếp thực hiện những quy định nào ?",
    options: [
      "Phải thực hiện theo đúng quy định về “Cho phép làm việc” như đối với một công việc mới. ",
      "Không phải cấp Phiếu mới nhưng phải ghi thời gian bắt đầu, kết thúc việc làm thêm vào Phiếu công tác.",
      "Thực hiện theo đúng quy định về “Cho phép làm việc” như đối với một công việc mới. Việc làm bổ sung này, không phải cấp PCT mới nhưng phải ghi thời gian bắt đầu, kết thúc việc làm thêm vào PCT.",
      "Cả 03 đáp án đều sai.",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "Khi kết thúc công việc và đã có lệnh tháo nối đất thì mọi người trong đơn vị công tác?",
    options: [
      "Cấm người tham gia thực hiện công việc tự ý vào nơi làm việc và tiếp xúc với thiết bị điện để làm bất cứ việc gì.",
      "Có thể vào nơi làm việc và tiếp xúc với thiết bị để kiểm tra thiết bị nhưng phải có người chỉ huy trực tiếp giám sát.",
      "Có thể vào nơi làm việc để kiểm tra thiết bị nhưng phải có người chỉ huy trực tiếp giám sát.",
      "Có thể vào nơi làm việc để kiểm tra thiết bị nhưng phải có người chỉ huy trực tiếp, người chó phép làm  giám sát liên tục.",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Bàn giao trao trả nơi làm việc, khóa PCT phải được tiến hành giữa những Người nào?",
    options: [
      "Người chỉ huy trực tiếp và đại diện trực ca vận hành.",
      "Người chỉ huy trực tiếp và Người cho phép.",
      "Người giám sát ATĐ và Người cho phép.",
      "Người lãnh đạo công việc và Người cho phép.",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Bàn giao trao trả nơi làm việc, khóa PCT phải được tiến hành như thế nào?",
    options: [
      "Phải được thực hiện giữa Người chỉ huy trực tiếp và Người cho phép.",
      "Sau khi Người chỉ huy trực tiếp ký kết thúc công tác, Người cho phép kiểm tra lại tại nơi làm việc đảm bảo an toàn mới được ký khoá PCT.",
      "Thực hiện những thủ tục tiếp theo để đưa ĐD, thiết bị điện vào vận hành hoặc dự phòng.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Thao tác đóng điện vào thiết bị điện đã cắt điện khi làm việc được thực hiện? ",
    options: [
      "Đã khóa PCT, nếu thiết bị đóng điện có liên quan đến nhiều Đơn vị công tác thì phải khóa tất cả các PCT, đảm bảo thiết bị sẽ đóng điện tuyệt đối an toàn.",
      "Nơi làm việc đã tháo biển báo và rào chắn tạm thời khi làm việc (nếu có), đặt lại rào chắn cố định. Tại nơi trực vận hành của Đơn vị QLVH đã tháo hết các dấu hiệu báo có Đơn vị công tác làm việc trên sơ đồ.",
      "Được phép đóng điện của đơn vị có quyền điều khiển quy định tại Thông tư quy định quy trình điều độ hệ thống điện quốc gia do Bộ Công Thương ban hành.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Trách nhiệm nào sau đây thuộc Đơn vị công tác khi thực hiện công việc?",
    options: [
      "Cấp PCT, LCT, Giấy bàn giao.",
      "Tổ chức các Đơn vị công tác, cử Người chỉ huy trực tiếp, Người lãnh đạo công việc, Người giám sát ATĐ, Nhân viên đơn vị công tác theo quy định của Quy trình này.",
      "Cử người cho phép là nhân viên vận hành đang làm nhiệm vụ trong ca trực để thực hiện việc cho phép làm việc ở tại hiện trường",
      "Cử nhân viên vận hành thực hiện các biện pháp kỹ thuật chuẩn bị nơi làm việc.",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Việc nào sau đây không thuộc trách nhiệm của Đơn vị công tác khi thực hiện công việc?",
    options: [
      "Chủ động phối hợp với Đơn vị công tác, đơn vị điều độ triển khai thực hiện công việc theo đúng kế hoạch và quy định của Quy trình này để đảm bảo an toàn cho Đơn vị công tác.",
      "Thống nhất với các Đơn vị QLVH có liên quan về tiến độ và tổ chức các Đơn vị công tác phù hợp với công việc, điều kiện thực tế của hiện trường công tác.",
      "Tổ chức các Đơn vị công tác, cử Người chỉ huy trực tiếp, Người lãnh đạo công việc, Người giám sát ATĐ, Nhân viên đơn vị công tác theo quy định của Quy trình này.",
      "Cấp có thẩm quyền của Đơn vị công tác phải chịu hoàn toàn trách nhiệm trước pháp luật về sự đảm bảo đáp ứng các yêu cầu của bậc ATĐ đối với từng loại công việc và những chức danh trong PCT, LCT theo quy định của Quy trình này được ghi trong Đăng ký công tác.",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Trách nhiệm trước pháp luật về sự đảm bảo đáp ứng các yêu cầu của bậc ATĐ đối với từng loại công việc và những chức danh trong PCT, LCT thuộc về ai?",
    options: [
      "Người lãnh đạo công việc.",
      "Người chỉ huy trực tiếp.",
      "Người sử dụng lao động của Đơn vị công tác",
      "Người cấp phiếu công tác.",
    ],
    correctAnswer: 2,
  },
  {
    question: "Việc tổ chức các Đơn vị công tác phải thực hiện ?",
    options: [
      "Với 01 đơn vị công tác chỉ làm việc theo 01 PCT (hoặc LCT), ",
      "Người chỉ huy trực tiếp và Người giám sát ATĐ (nếu có) phải giám sát được tất cả nhân viên của Đơn vị công tác trong cùng một thời gian, không gian để đảm bảo an toàn về điện.",
      "với 01 Đơn vị công tác khi làm việc theo 01 PCT (hoặc LCT), Người chỉ huy trực tiếp và Người giám sát ATĐ (nếu có) phải giám sát được tất cả nhân viên của Đơn vị công tác trong thời gian làm việc để đảm bảo an toàn về điện.",
      "Cả 03 đáp án đều sai.",
    ],
    correctAnswer: 2,
  },
  {
    question: "Trách nhiệm của đơn vị QLVH khi thực hiện công việc?",
    options: [
      "Chủ động phối hợp với Đơn vị công tác, đơn vị điều độ triển khai thực hiện công việc theo đúng kế hoạch và quy định của Quy trình này để đảm bảo an toàn cho Đơn vị công tác.",
      "Cử Nhân viên vận hành thực hiện các biện pháp kỹ thuật chuẩn bị nơi làm việc. ",
      "Nếu thao tác cắt điện thuộc các Đơn vị QLVH khác thì chủ động phối hợp với đơn vị điều độ cắt điện theo đúng kế hoạch, đảm bảo thời gian làm việc.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Đơn vị cấp PCT trong trường hợp thiết bị hoặc nơi làm việc do 01 đơn vị QLVH quản lý?",
    options: [
      "Là Đơn vị QLVH thiết bị hoặc nơi làm việc đó.",
      "Đơn vị làm công việc.",
      "Đơn vị điều độ.",
      "Đơn vị giám sát.",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Người cho phép của Đơn vị cấp PCT chỉ được ký cho phép và giao PCT cho người chỉ huy trực tiếp khi nào?",
    options: [
      "Đã kiểm tra và có đủ, đúng các biện pháp an toàn của đơn vị mình.",
      "Đã nhận và kiểm tra việc thực hiện đầy đủ các mục trong Giấy bàn giao.",
      "Đã kiểm tra và có đủ, đúng các biện pháp an toàn của đơn vị mình. Và đã nhận và kiểm tra việc thực hiện đầy đủ các mục trong PCT.",
      "Cả 03 đáp án đều sai.",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "Trường hợp Đơn vị QLVH là Đơn vị công tác phải thực hiện quy định nào?",
    options: [
      "Lập phương án cụ thể, chi tiết khi triển khai kế hoạch công việc.",
      "Phân định rõ trách nhiệm thực hiện của từng chức danh trong PCT và các bộ phận trong đơn vị có liên quan đến công việc để thực hiện đúng theo quy định của Quy trình này.",
      "Cả 03 đáp án đều sai.",
      "Lập phương án cụ thể, chi tiết khi triển khai kế hoạch công việc.. Phân định rõ trách nhiệm thực hiện của từng chức danh trong PCT và các bộ phận trong đơn vị có liên quan đến công việc để thực hiện đúng theo quy định của Quy trình này.",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Nội dung nào sau đây không thuộc trách nhiệm của đơn vị Điều độ khi thực hiện công việc.",
    options: [
      "Lập, duyệt phương thức vận hành, lịch cắt điện công tác tuần (tháng), thông báo và gửi lịch cắt điện đã được duyệt cho các Đơn vị QLVH có liên quan đến công việc.",
      "Lập phương án, kế hoạch thực hiện công việc.",
      "Chỉ huy thao tác cắt điện, bàn giao ĐD, thiết bị điện cho Đơn vị QLVH theo đúng quy định và thời gian được phê duyệt.",
      "Gắn nhãn, đánh dấu hoặc các hình thức khác để nhận biết được đơn vị công tác đang thực hiện công việc trên ĐD, thiết bị điện.",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Đơn vị công tác phải thực hiện các biện pháp an toàn nào để đảm bảo an toàn nơi công cộng?",
    options: [
      " Đặt rào chắn",
      "Tín hiệu cảnh báo",
      "Làm việc tại đường giao thông ",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Nguyên tắc làm rào chắn của Đơn vị công tác để đảm bảo an toàn nơi công cộng như thế nào?",
    options: [
      "Đặt rào chắn nếu thấy cần thiết quanh vùng làm việc sao cho người không có nhiệm vụ không đi vào đó gây tai nạn và tự gây thương tích",
      "Trong trường hợp làm việc với đường cáp điện ngầm, đơn vị công tác phải thực hiện các biện pháp nhằm tránh cho người, phương tiện có thể bị rơi xuống hố.",
      "Đặt rào chắn nếu thấy cần thiết quanh vùng làm việc sao cho người không có nhiệm vụ không đi vào đó gây tai nạn và tự gây thương tích. Đặc biệt trong trường hợp làm việc với đường cáp điện ngầm, đơn vị công tác phải thực hiện các biện pháp nhằm tránh cho người, phương tiện có thể bị rơi xuống hố.",
      "Cả 03 đáp án đều sai.",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Đơn vị công tác phải đặt tín hiệu cảnh báo trước khi làm việc nhằm đảm bảo an toàn cho cộng đồng?",
    options: [
      "Không bắt buộc.",
      "Bắt buộc.",
      "Đặt tín hiệu cảnh báo nếu điều kiện cho phép.",
      "Cả 3 đáp án đều sai.",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Khi làm công việc tại đường giao thông đối với các công việc như xây dựng và sửa chữa, Đơn vị công tác thực hiện giải pháp nào?",
    options: [
      "Không cần hạn chế sự qua lại của phương tiện giao thông.",
      "Ngăn cấm sự qua lại của phương tiện giao thông, người đi bộ.",
      "Hạn chế sự qua lại của phương tiện giao thông, người đi bộ nhằm giữ an toàn cho cộng đồng.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "Khi làm công việc tại đường giao thông  mà cần hạn chế các phương tiện tham gia giao thông thì Đơn vị công tác phải đảm bảo các yêu cầu nào sau đây?",
    options: [
      "Thực hiện đầy đủ quy định của các cơ quan chức năng liên quan.",
      "Phải đặt tín hiệu cảnh báo và bố trí người hướng dẫn nhằm tránh nguy hiểm cho cộng đồng.",
      "Chiều rộng của đường để các phương tiện giao thông đi qua phải đảm bảo quy định của cơ quan quản lý đường bộ.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Khi làm công việc tại đường giao thông  mà cần hạn chế đi lại của người đi bộ, để đảm bảo việc qua lại an toàn, phải thực hiện?",
    options: [
      "Căng dây, lắp đặt rào chắn tạm thời và có biển chỉ dẫn cụ thể",
      "Căng dây và có biển chỉ dẫn cụ thể",
      "Có biển chỉ dẫn cụ thể, đồng thời cử người cảnh giới.",
      "Cử người cảnh giới",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Khi công việc được thực hiện ở gần hoặc tại vị trí giao chéo giữa đường dây dẫn điện với đường sắt, đường bộ, đường thuỷ đơn vị công tác phải?",
    options: [
      "Liên hệ với cơ quan có liên quan để bố trí người hỗ trợ trong mọi trường hợp.",
      "Liên hệ với cơ quan có liên quan và đề nghị các cơ quan này bố trí người hỗ trợ trong khi làm việc để bảo đảm an toàn cho người và phương tiện tham gia giao thông, nếu thấy cần thiết.",
      "Liên hệ với cơ quan có liên quan và đề nghị các cơ quan này hỗ trợ trong khi làm việc để bảo đảm an toàn cho người và phương tiện tham gia giao thông.",
      "Không cần liên hệ với cơ quan có liên quan.",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Khi thực hiện các công việc trong trạm hay trên ĐDKđiện áp cao phải có biện pháp phòng tránh ảnh hưởng nguy hiểm điện, từ trường do các nguyên nhân sau?",
    options: [
      "Phóng điện từ các bộ phận mang điện.",
      "Ảnh hưởng của điện trường; Ảnh hưởng của cảm ứng điện từ, cảm ứng tĩnh điện.",
      "Ảnh hưởng của điện thế chạm, điện áp bước trên nối đất khi có ngắn mạch.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Biện pháp an toàn phòng tránh nguy hiểm điện từ trường được thực hiện như thế nào?",
    options: [
      "Phải đo ở những chỗ có người đến làm việc (quản lý, vận hành, kiểm tra, sửa chữa, chỉnh định, thử nghiệm, làm vệ sinh,… ), ",
      "Lập biên bản đo.",
      "Kiểm tra và chấp hành quy định thời gian đo theo Tiêu chuẩn ngành “Mức cho phép của cường độ điện trường và quy định việc kiểm tra ở chỗ làm việc”",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Khi người lao động không sử dụng thiết bị phòng tránh tác động của điện trường làm việc trong trạm hay trên ĐDK 220kV trở lên; giá trị cường độ điện trường bao nhiêu thì không được phép làm việc?",
    options: ["10 kV/m", "15 kV/m", "20 kV/m", "≥ 25 kV/m"],
    correctAnswer: 3,
  },
  {
    question:
      "Khi không sử dụng bộ quần áo chống điện trường thì thời gian còn lại trong ngày khi đã làm việc ở những nơi có cường độ điện trường lớn hơn 5 kV/m? ",
    options: [
      "Không được bố trí làm thêm.",
      "Chỉ được phép làm việc ở những nơi có cường độ điện trường dưới 5kV/m.",
      "Căn cứ nhu cầu lao động làm công việc để bố trí.",
      "Không có quy định.",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Trong một ngày đêm nếu làm việc ở nhiều nơi có cường độ điện trường khác nhau thì thời gian tương đương cho phép là?",
    options: [
      "Không được vượt quá 6 giờ.",
      "Không được vượt quá 8 giờ.",
      "Không được vượt quá 10 giờ.",
      "Không được vượt quá 7 giờ.",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Khi đã dùng các thiết bị chắn nhưng cường độ điện trường vẫn lớn hơn 5 kV/m thì?",
    options: [
      "Phải hạn chế thời gian làm việc trong ngày theo quy định.",
      "Được phép làm việc lâu dài không hạn chế thời gian",
      "Không được phép làm việc.",
      "Không có quy định.",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Nối đất phòng tránh nguy hiểm cảm ứng điện từ trường được thực  hiện như thế nào? ",
    options: [
      "Các bộ phận, kết cấu kim loại của thiết bị, phương tiện, dụng cụ dùng trong trạm hay trên ĐDK 220 kV, 500 kV (như thiết bị điện, bàn, tủ, bảng, bơm, quạt, điều hòa, thông gió, thiết bị thông tin, tín hiệu, máy tính, các giá đèn, thanh, ống, dây,… bằng kim loại) phải được nối đất theo quy định.",
      "Các bộ phận bằng kim loại của thiết bị, dụng cụ, công cụ, kết cấu (kể cả các\nđường cáp, giá, dàn, thanh, ống, dây,… kim loại) đưa vào trạm và dưới ĐDK 220 kV, 500 kV để phục vụ cho việc sửa chữa, vệ sinh, chỉnh định, kiểm tra, thử nghiệm cũng phải được nối đất theo quy định.",
      "Khi làm việc gần các thiết bị 220kV, 500kV phải nối các chi tiết bằng kim loại trên các phương tiện bảo vệ cá nhân (quần, áo, giày, mũ, dây an toàn,…) và công cụ lao động vào nối đất ở sàn, nền, giá kim loại mà người đứng trên đó.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Nối đất các bộ phận, kết cấu kim loại của thiết bị, phương tiện, dụng cụ dùng trong trạm hay trên ĐDK 220kV, 500kV được  quy định như thế nào?",
    options: [
      "Dây nối đất phải là dây đồng mềm có tiết diện không bé hơn 10mm2",
      "Nối dây nối đất vào thiết bị, kết cấu phải bằng bu lông hàn hay kẹp nối dây.",
      "Nối vào nối đất cột ĐDK hay nối đất trạm",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Khi các phương tiện vận chuyển bằng bánh lốp (nhất là phương tiện vận chuyển chất cháy nổ) đi gần và cách ĐDK 500kV, 220kV  khoảng cách bao nhiêu thì phải dùng nối đất tạm thời (như dây xích nối đất, thanh quét nối đất) để khử tĩnh điện?",
    options: ["Dưới 50 m", "Dưới 60 m", "Dưới 70 m", "Dưới 80 m"],
    correctAnswer: 0,
  },
  {
    question:
      "Khi làm công việc sửa chữa, lắp đặt thiết bị điện hoặc thí nghiệm trong trạm biến áp phải có ít nhất mấy người.",
    options: ["Không quy định.", "02 người", "03 người", "05 người."],
    correctAnswer: 1,
  },
  {
    question:
      "Các nhân viên làm việc, kiểm tra trong trạm biến áp không được phép làm việc trên thiết bị điện trong trường hợp nào sau đây?",
    options: [
      "Những thiết bị điện đang vận hành bị mất điện, hoặc đã cắt điện nhưng chưa nối đất, hoặc thiết bị điện dự phòng đặt trong trạm có thể được khôi phục lại điện bất cứ lúc nào; cấm làm việc ở các thiết bị điện đó.",
      "Những thiết bị đang vận hành bị mất điện.",
      "Những thiết bị đang vận hành đã cắt điện nhưng chưa nối đất.",
      "Những thiết bị đang ở chế độ dự phòng đặt trong trạm.",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Khi vào trạm biến áp làm việc, những người vào tham quan, nghiên cứu phải?",
    options: [
      "Do người lãnh đạo Đơn vị QLVH (hoặc kỹ thuật viên) hướng dẫn. Tuân thủ nội quy của trạm biến áp.",
      "Được trực ca vận hành cho phép và hướng dẫn.",
      "Được đơn vị bảo vệ trạm biến áp cho phép.",
      "Cả 3 đáp án đều sai.",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Những công việc nào cho phép làm việc khi thiết bị điện vẫn có điện nhưng phải đảm bảo khoảng cách an toàn theo quy định?",
    options: [
      "Lấy mẫu dầu máy biến áp (chú ý kiểm tra nối đất vỏ máy trước). Tiến hành lọc dầu ở những máy biến áp đang vận hành. Giám sát dầu trực tuyến, giám sát phóng điện cục bộ, kiểm tra nhiệt độ mối nối, kiểm tra hệ thống đo đếm,….",
      "Kiểm tra độ rung của thanh cái bằng sào thao tác. Đo dòng điện bằng ampe kìm; đo thử, kiểm tra đồng vị pha và đo góc lệch pha giữa 02 nguồn khác nhau bằng dụng cụ chuyên dùng.",
      "Vệ sinh cách điện từ 35 kV trở xuống bằng dụng cụ chuyên dùng đã được kiểm tra và thử nghiệm định kỳ theo đúng quy định hiện hành. Công việc đo độ cao dây dẫn bằng sào chuyên dùng. Ngoài ra chỉ được tiến hành khi các bộ phận mang điện ở phía trước mặt hay ở phía trên đầu, người làm việc phải đứng trên nền nhà hoặc giá đỡ chắc chắn, cấm người làm việc đứng lom khom.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Chỉ được dùng ampe kìm đo dòng điện ở thiết bị điện cao áp với cấp điện áp nào? ",
    options: ["110 kV trở xuống", "66 kV ", "Từ 35 kV trở xuống.", "220 kV "],
    correctAnswer: 2,
  },
  {
    question:
      "Quy định trang bị an toàn khi sử dụng Ampe kìm đo cường độ dòng điện?",
    options: [
      "Khi đo phải sử dụng găng tay cách điện, ủng cách điện hoặc ghế cách điện tương ứng với cấp điện áp của thiết bị, vị trí đo phải thuận tiện.",
      "Khi đo phải sử dụng găng tay cách điện, vị trí đo phải thuận tiện.",
      "Khi đo phải sử dụng ủng cách điện hoặc ghế cách điện tương ứng với cấp điện áp của thiết bị, vị trí đo phải thuận tiện.",
      "Không cần trang bị an toàn bổ sung.",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Được phép sửa chữa các phần nào của MC khi máy cắt đang vận hành ?",
    options: [
      "Sửa chữa phần mạch điều khiển MC",
      "Sửa chữa phần cơ khí như trụ đỡ, bộ truyền động MC",
      "Cấm sửa chữa ở các máy cắt đang vận hành",
      "Cả 3 đáp án sai",
    ],
    correctAnswer: 2,
  },
  {
    question: "Các yêu cầu khi làm việc với tụ điện để đảm bảo an toàn?",
    options: [
      "Cấm dùng dao cách ly để đóng, cắt các tụ điện cao áp và lấy mẫu dầu khi tụ điện đang vận hành.",
      "Khi cắt tụ điện để sửa chữa thì phải phóng điện (xả điện tích) các tụ điện theo quy định, quy trình của Đơn vị QLVH.",
      "Khi phóng điện tích dư của tụ điện phải có điện trở hạn chế, sau đó mới phóng trực tiếp xuống đất để tránh hư hỏng tụ.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question: "Quy định khi làm việc với tụ điện nào sau đây không đúng?",
    options: [
      "Có thể dùng dao cách ly để đóng, cắt các tụ điện cao áp và lấy mẫu dầu khi tụ điện đang vận hành.",
      "Khi cắt tụ điện để sửa chữa thì phải phóng điện (xả điện tích) các tụ điện theo quy định, quy trình của đơn vị quản lý vận hành.",
      "Khi phóng điện tích dư của tụ điện phải có điện trở hạn chế, sau đó mới phóng trực tiếp xuống đất để tránh hư hỏng tụ.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Khi vào làm việc với hệ thống ắc quy phải tuân thủ các yêu cầu nào ?",
    options: [
      "Chuẩn bị chất trung hoà phù hợp với hệ thống ắc quy và không hút thuốc hoăc đem lửa vào phòng ắc quy.",
      "Phải thực hiện các biện pháp thích hợp như mặc quần áo chuyên dụng, đeo kính bảo vệ mắt và găng tay cao su để bảo vệ cơ thể khỏi bị ảnh hưởng do axít hoặc kiềm.",
      "Phòng ắc quy đã được thông gió để phòng ngừa bi ̣ngô ̣ độc hoặc cháy nổ do khí phát sinh từ hê ̣thống ắc quy. Trang bị các chai nước sạch (để phun rửa mắt) để đề phòng khi bị dung dịch điện phân bắn vào mắt.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question: "Quy định khi pha chế axít?",
    options: [
      "Phải rót từng tia nhỏ axít theo đũa thuỷ tinh vào bình nước cất.",
      "Luôn luôn khuấy để toả nhiệt tốt.",
      "Cấm đổ nước cất vào axít để pha chế thành dung dịch.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question: "Biện pháp an toàn khi làm việc, sử dụng và pha chế axít",
    options: [
      "Làm việc với axít do người chuyên nghiệp thực hiện, vận chuyển bình axít phải có 02 người, chú ý kiểm tra đường đi trước để tránh trơn, trượt ngã hoặc làm đổ bình",
      "Trên thành các bình chứa axít, chứa dung dịch axít, nước cất đều phải ghi rõ từng loại bằng sơn chống axít",
      "Axít đậm đặc phải để trong các buồng riêng, ngoài axít ra chỉ được phép để dung dịch trung hoà; axít phải để trong các bình chuyên dùng bằng nhựa tổng hợp, thủy tinh hay sành sứ có nắp đậy và quai xách.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Khu vực thí nghiệm có điện áp cao phải thực hiện biện pháp gì sau đây?",
    options: [
      "Phải có rào chắn. ",
      "Có người trông coi. ",
      "Người không có nhiệm vụ không được vào. ",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Quy định về an toàn đối với dao cách ly phía hạ áp để cấp điện thí nghiệm?",
    options: [
      "Phải sử dụng dao 2 cực, phần cắt mạch điện phải được trông thấy rõ. ",
      "Dao cách ly ở vị trí cắt phải có đệm lót cách điện đặt ở giữa lưỡi dao và hàm tĩnh của dao. ",
      "Khi đưa thiết bị vào mạch thử phải có người trông coi dao cách ly.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Khi dùng thiết bị thí nghiệm lưu động phải thực hiện đúng các quy định về an toàn?",
    options: [
      "Các bộ phận cao áp phải che kín.",
      "Nếu thiết bị thí nghiệm để hở thì phải bố trí riêng một bên đặt thiết bị hạ áp, một bên đặt thiết bị cao áp và giữa hai bên phải có ngăn cách.",
      "Dao cách ly, cầu chì và các thiết bị điện hạ áp phải để ở nơi thuận tiện, dễ kiểm tra, điều khiển.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Khoảng cách từ phần dẫn điện của thiết bị thử nghiệm điện áp xung (trị số biên độ đến 100kV) đến rào chắn cố định khi làm việc với công việc thí nghiệm điện có nối đất không được nhỏ hơn ?",
    options: ["0,4 m.", "0,5 m.", "0,75 m.", "1 m."],
    correctAnswer: 1,
  },
  {
    question:
      "Khoảng cách từ phần dẫn điện của thiết bị thử nghiệm điện áp xoay chiều tần số công nghiệp giá trị hiệu dụng trên 50kV đến 100kV đến rào chắn cố định khi làm việc với công việc thí nghiệm điện có nối đất không được nhỏ hơn?",
    options: ["0,5 m.", "1,0 m.", "1,5 m.", "2,0 m."],
    correctAnswer: 1,
  },
  {
    question: "Quy định về rào chắn an toàn đối với công việc thí nghiệm điện",
    options: [
      "Kết cấu của rào chắn phải đảm bảo người không thể vô ý chạm phải phần có điện.",
      "Rào chắn cố định phải có chiều cao không nhỏ hơn 1,7 m",
      "Rào chắn tạm thời có chiều cao không nhỏ hơn 1,2 m. ",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Biện pháp an toàn khi thử nghiệm đối tượng có điện dung lớn như tụ điện, cáp?",
    options: [
      "Khi kết thúc thử nghiệm, các tụ điện được đấu vào sơ đồ thử nghiệm phải được phóng điện và nối đất. ",
      "Khi các tụ điện đấu nối tiếp phải phóng điện từng tụ điện. Phải phóng điện cho đến khi hết tia lửa.",
      "Khi thử nghiệm đối tượng có điện dung lớn như tụ điện, cáp, mặt bằng thử nghiệm phải có thiết bị nối tắt và chập mạch sản phẩm cần thử với đất.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Việc kiểm định định kỳ thiết bị, dụng cụ thí nghiệm thuộc trách nhiệm của đơn vị nào?",
    options: [
      "Đơn vị quản lý vận hành.",
      "Đơn vị làm công việc.",
      "Đơn vị quản lý vận hành thiết bị thí nghiệm cần kiểm định.",
      "Không quy định.",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "Trước khi thực hiện thí nghiệm có phóng điện, hoặc các thử nghiệm hay thí nghiệm khác có nguy cơ rủi ro, nhân viên phải thực hiện các biện pháp nào?",
    options: [
      "Phải chắc chắn không có người trong vùng nguy hiểm.",
      "Phải chắc chắn không có người không có nhiệm vụ trong vùng làm việc.",
      "Đặt tín hiệu cảnh báo và khoá hàng rào để ngăn chặn người không có nhiệm vụ xâm nhập vào khu vực thí nghiệm.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Khi thử nghiệm độ bền cơ của vật cách điện (bằng gốm, thuỷ tinh, nhựa tổng hợp…) cần lưu ý điều gì?",
    options: [
      "Cấm người đứng ở gần nơi thử nghiệm. Phải có biện pháp đề phòng tai nạn cho Nhân viên đơn vị công tác do các mảnh vụn bắn ra.",
      "Phải chắc chắn không có người không có nhiệm vụ trong vùng làm việc.",
      "Khi đứng ở gần nơi thử nghiệm phải có biện pháp đề phòng tai nạn do các mảnh vụn bắn ra.",
      "Cả 3 đáp án đều sai.",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Để đề phòng điện áp thử (định mức đến 20kV) ảnh hưởng đến điện áp công tác, phải đảm bảo khoảng cách giữa hai phần có điện áp đó nhỏ nhất là bao nhiêu ?",
    options: ["15 cm.", "20 cm.", "25 cm.", "30 cm."],
    correctAnswer: 2,
  },
  {
    question:
      "Khi sử dụng xe thí nghiệm lưu động hoặc máy thử cố định, điều kiện phải tuân theo nào sau đây là không chính xác?",
    options: [
      "Máy thử phải được chia thành hai phần rõ ràng, một phần đặt các thiết bị dưới 1000 V, có chỗ đứng cho người thao tác, còn phần kia đặt tất cả các thiết bị và dây dẫn điện cao áp.",
      "Các thiết bị có điện cao áp phải được rào chắn cẩn thận để tránh người đến gần. Mọi thiết bị điện hạ áp phải bố trí sao cho việc thao tác và kiểm tra được thuận tiện.",
      "Cửa của các thiết bị điện áp trên 1000 V phải có khoá liên động dùng tiếp điểm điện để khi mở cửa thì điện áp trên 1000 V được cắt ra và có đèn báo khi phần thiết bị này có điện.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Khi làm việc ở những mạch đo lường, điều khiển, bảo vệ đang có điện phải áp dụng biện pháp an toàn nào sau đây?",
    options: [
      "Tất cả các cuộn dây thứ cấp của máy biến dòng điện và máy biến điện áp phải có dây nối đất cố định.",
      "Cấm để hở mạch cuộn thứ cấp của máy biến dòng điện.",
      "Cấm để ngắn mạch cuộn thứ cấp của máy biến điện áp.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Khi lắp đặt mới hoặc thay thế công tơ, hộp công tơ ở cấp điện áp 220/380 V (công tơ bán lẻ), trường hợp nào phải cắt điện?",
    options: [
      "Không thể che chắn, chống chạm chập cho các phần mang điện hở. Tại các vị trí không đảm bảo khô ráo cho người công nhân đứng làm việc như các cột trên ruộng nước, vùng ngập úng, bùn lầy.",
      "Khi hiện trường không thể thực hiện đủ, đúng các biện pháp an toàn đã được duyệt. Tại hiện trường nếu phát hiện vị trí làm việc có khả năng ngã đổ hoặc phát hiện công trình khác xung quanh không ổn định có khả năng ngã đổ ảnh hưởng đến vị trí làm việc.",
      "Tại vị trí làm việc có nhiều chướng ngại vật mà không thể dùng các phương tiện cơ giới.  Tại các vị trí không gian nhỏ, khó thực hiện.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Người vận hành xe chuyên dùng phải đáp ứng điều kiện nào sau đây?",
    options: [
      "Chỉ những người đã được đào tạo kỹ năng vận hành xe chuyên dùng.",
      "Theo sự phân công của người lãnh đạo công việc",
      "Chỉ những người đã được đào tạo kỹ năng đầy đủ và có chứng chỉ liên quan theo quy định của pháp luật mới được vận hành xe chuyên dùng.",
      "Theo phân công của người chỉ huy trực tiếp.",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "Việc vận hành, bảo dưỡng, sửa chữa và kiểm định cầu trục phải thực hiện theo quy định nào?",
    options: [
      "Quy định an toàn khi làm việc với thiết bị nâng hiện hành",
      "Quy định của nhà sản xuất thiết bị",
      "Quy định của đơn vị vận hành thiết bị",
      "Không có quy định nào",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Khi di chuyển, vận hành trong khu vực trạm, khoảng cách nhỏ nhất từ bất kỳ bộ phận nào của xe đến phần mang điện từ trên 15kV đến 35 kV không nhỏ hơn?",
    options: ["1,0 m.", "1,5 m.", "0,7 m.", "2,0 m."],
    correctAnswer: 0,
  },
  {
    question:
      "Khi di chuyển, vận hành trong khu vực trạm, khoảng cách nhỏ nhất từ bất kỳ bộ phận nào của xe đến phần mang điện từ trên 35kV đến 110 kV không nhỏ hơn?",
    options: ["1,0 m.", "1,5 m. ", "2,0 m.", "2,5 m."],
    correctAnswer: 1,
  },
  {
    question:
      "Khi di chuyển, vận hành trong khu vực trạm, khoảng cách nhỏ nhất từ bất kỳ bộ phận nào của xe đến phần mang điện 220kV không nhỏ hơn?",
    options: ["1,0 m.", "1,5 m.", "2.5 m.", "4,5 m."],
    correctAnswer: 2,
  },
  {
    question:
      "Khi di chuyển, vận hành trong khu vực trạm, khoảng cách nhỏ nhất từ bất kỳ bộ phận nào của xe đến phần mang điện 500kV không nhỏ hơn?",
    options: ["1,0 m.", "1,5 m.", "2.5 m.", "4,5 m."],
    correctAnswer: 3,
  },
  {
    question:
      "Khi làm việc có cắt điện một phần hoặc ở gần nơi có điện, bệ xe cần cẩu, xe thang và xe nâng di động có phải nối đất không?",
    options: [
      "Tùy theo người cho phép.",
      "Không nối đất.",
      "Phải nối đất.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "Khi có hiện tượng phóng điện vào xe chuyên dùng, cần phải xử lý sự cố như thế nào?",
    options: [
      "Cấm người chạm vào xe.",
      "Cấm người rời khỏi xe trước khi cắt nguồn điện gây phóng điện.",
      " Cấm người bước lên xe trước khi cắt nguồn điện gây phóng điện.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Xử lý sự cố xe chuyên dùng như thế nào nếu xe bị cháy khi chưa kịp cắt nguồn điện?",
    options: [
      "Người lái xe phải nhảy ra khỏi xe",
      "Khi nhảy phải nhảy cả hai chân và đứng yên tại chỗ",
      "Nếu cần chạy ra xa phải nhảy cả hai chân một lúc hoặc nhảy một chân (nhảy lò cò).",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question: "Quy định khi làm việc có sử dụng xe chuyên dùng?",
    options: [
      "Người chỉ huy trực tiếp có thể cho phép nhân viên đơn vị công tác đi vào vùng nguy hiểm của xe chuyên dùng",
      "Người chỉ huy trực tiếp phải thực hiện các biện pháp an toàn như đảm bảo độ rộng cần thiết cho lộ trình của xe, tránh làm cho đất gồ ghề, thực hiện các biện pháp tránh làm phá hỏng đường hoặc các biện pháp khác để tránh nguy cơ rủi ro có thể xảy ra với Nhân viên đơn vị công tác do đổ xe hoặc các tai nạn khác.",
      "Nhân viên đơn vị công tác có thể tự ý đi vào vùng nguy hiểm của xe chuyên dùng để làm việc",
      "Nhân viên đơn vị công tác được phép đi vào vùng nguy hiểm của xe chuyên dùng theo lệnh của người lãnh đạo công việc",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Khi vận hành xe bên vệ đường, địa hình nghiêng dốc,… nếu thấy có nguy cơ nhân viên đơn vị công tác có thể gặp rủi ro do đổ xe, người chỉ huy trực tiếp phải? ",
    options: [
      "Bố trí một hoặc một số người dẫn đường, chỉ dẫn cho xe.",
      "Tự mình chỉ dẫn cho người vận hành xe.",
      "Dừng ngay không cho phép làm việc.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 0,
  },
  {
    question: "Được phép làm việc 01 người trên ĐDK trong trường hợp nào?",
    options: [
      "Đi kiểm tra ĐDK, thiết bị bằng mắt. ",
      "Phải xem như ĐDK đang có điện, kiểm tra tiến hành trên mặt đất, ban đêm phải có đèn soi, chú ý dây dẫn bị chùng võng và đứt, rơi.",
      "Đi kiểm tra ĐDK, thiết bị bằng mắt. Phải xem như ĐDK đang có điện, kiểm tra tiến hành trên mặt đất, ban đêm phải có đèn soi, chú ý dây dẫn bị chùng võng và đứt, rơi.",
      "Không có quy định.",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "Khi kiểm tra ĐDK thấy dây dẫn đứt, rơi xuống đất hoặc còn lơ lửng phải có biện pháp để không cho mọi người tới gần với khoảng cách tối thiểu là bao nhiêu?",
    options: [
      "5 m trở lên.",
      "10 m trở lên.",
      "20 m trở lên.",
      "15 m trở lên.",
    ],
    correctAnswer: 1,
  },
  {
    question: "Điều kiện thời tiết khi tiến hành đo điện trở nối đất cột ĐDK ?",
    options: [
      "Trời không có mưa, giông, sét.",
      "Trời nắng ",
      "Trời mưa",
      "Không có quy định.",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Nếu ĐDK có bảo vệ bằng dây chống sét thì khi tháo dây nối đất phải?",
    options: [
      "Mang găng tay cách điện hoặc trước khi tháo, đầu dây nối đất ở cột phải được nối tắt tạm thời vào một cọc nối đất bằng một đoạn dây dẫn có tiết diện tối thiểu 10mm2.",
      "Phải được nối tắt tạm thời vào một cọc nối đất bằng một đoạn dây dẫn có tiết diện tối thiểu 8 mm2.",
      "Mang ủng cách điện",
      "Cả 3 đáp án đều sai.",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Các công việc làm nào trên ĐDK đã cắt điện được phép tiến hành 01 người?",
    options: [
      "Treo (in) biển báo, sửa chân cột, đánh số cột,… mà không trèo lên cột cao quá 3,0 m",
      "Treo (in) biển báo, sửa chân cột, đánh số cột,… mà không trèo lên cột cao quá 2,5 m và không sửa chữa các cấu kiện của cột.",
      "Treo (in) biển báo, sửa chân cột, đánh số cột,… mà không trèo lên cột cao quá 2,0 m và không sửa chữa các cấu kiện của cột.",
      "Treo (in) biển báo, sửa chân cột, đánh số cột,…và được phép  trèo lên cột cao quá 3,0 m và không sửa chữa các cấu kiện của cột.",
    ],
    correctAnswer: 2,
  },
  {
    question: "Cấm làm việc trên ĐDK đã cắt điện trong trường hợp nào?",
    options: [
      "Khi có gió cấp 4 trở lên hoặc có mưa nặng hạt, nước chảy thành dòng trên người và thiết bị trừ trường hợp đặc biệt khi có lệnh khẩn cấp của cấp có thẩm quyền.",
      "Khi có gió cấp 5 trở lên hoặc có mưa nặng hạt, nước chảy thành dòng trên người và thiết.",
      "Khi bắt đầu có gió cấp 6 trở lên hoặc có mưa nặng hạt, nước chảy thành dòng trên người và thiết bị điện.",
      "Khi có gió cấp 7 trở lên hoặc có mưa nặng hạt, nước chảy thành dòng trên người và thiết bị.",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "Khi công tác trên chuỗi sứ của ĐDK đã cắt điện, chỉ cho phép người di chuyển dọc chuỗi sứ trong những trường hợp nào?",
    options: [
      "Sau khi đã xem xét kỹ chuỗi sứ, không có vết nứt ở đầu sứ hay các phụ kiện khác, các móc nối, khoá, chốt còn tốt và đủ. ",
      "Người làm việc phải sử dụng dây an toàn phụ cài chặt vào xà hoặc đầu cột.",
      "Sau khi đã xem xét kỹ chuỗi sứ, không có vết nứt ở đầu sứ hay các phụ kiện khác, các móc nối, khoá, chốt còn tốt và đủ. Người làm việc phải sử dụng dây an toàn phụ cài chặt vào xà hoặc đầu cột.",
      "Người làm việc phải sử dụng dây an toàn cài chặt vào chuỗi sứ.",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "Khi tiến hành công tác trên ĐDK đã cắt điện giao chéo với đường sắt, đường sông phải?",
    options: [
      "Phải báo trước cho cơ quan quản lý đường sắt, đường sông và mời đại diện của họ tới điểm công tác để phối hợp, đảm bảo an toàn cho hai bên và cộng đồng",
      "Phải cử người cảnh giới cầm cờ đỏ (hoặc đèn đỏ nếu là ban đêm), đứng cách nơi làm việc với khoảng cách hợp lý về hai phía để báo hiệu.",
      "Nếu có nhiều phương tiện qua lại thì phải bắc giàn giáo.",
      "Không có quy định.",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Khi tiến hành công tác trên ĐDK đã cắt điện giao chéo đường bộ phải?",
    options: [
      "Mời đại diện của cơ quan quản lý đường bộ tới điểm công tác để phối hợp, đảm bảo an toàn cho cộng đồng.",
      "Phải cử Người cảnh giới cầm cờ đỏ (hoặc đèn đỏ nếu là ban đêm), đứng cách nơi làm việc với khoảng cách hợp lý về hai phía để báo hiệu. Nếu có nhiều xe qua lại thì phải bắc giàn giáo.",
      "Phải cử người cảnh giới cầm cờ đỏ (hoặc đèn đỏ nếu là ban đêm), đứng cách nơi làm việc với khoảng cách hợp lý về phía có nhiều phương tiện tới để báo hiệu.",
      "Không có quy định.",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Việc chặt (cưa) cây ở gần đường dây phải thực hiện những quy định nào?",
    options: [
      "Người chưa huấn luyện và kiểm tra, chưa có kinh nghiệm không trực tiếp chặt cây.",
      "Người chỉ huy trực tiếp phải thông báo cho nhân viên đơn vị công tác biết về nguy hiểm khi trèo lên cây.",
      "Cấm chặt cây khi có gió cấp 4 trở lên.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Người chưa được huấn luyện và kiểm tra, chưa có kinh nghiệm có được phép trực tiếp chặt (cưa) cây không?",
    options: [
      "Không trực tiếp chặt cây",
      "Được phép trực tiếp chặt cây",
      "Có thể trực tiếp chặt cây theo hướng dẫn của người chỉ huy trực tiếp",
      "Có thể trực tiếp chặt cây theo hướng dẫn của người lãnh đạo công việc",
    ],
    correctAnswer: 0,
  },
  {
    question: "Cấm chặt (cưa) cây ở gần đường dây khi có gió cấp mấy?",
    options: [
      "Cấp 5 trở lên",
      "Cấp 4 trở lên",
      "Cấp 6 trở lên",
      "Cấp 3 trở lên",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Nếu chặt cây, chặt cành mà có khả năng đổ, rơi vào ĐDK đang mang điện phải?",
    options: [
      "Phải cắt điện đường dây",
      "Nếu không cắt điện đường dây thì phải có biện pháp để hạ cây, cành an toàn",
      "Phải cắt điện đường dây. Nếu không cắt điện đường dây thì phải có biện pháp để hạ cây, cành an toàn.",
      "Cấm chặt cây, cành trong mọi trường hợp.",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "Biện pháp an toàn khi làm việc trên cao  đươc áp dụng theo quy trình nào",
    options: [
      "Quy định về công tác an toàn do EVN ban hành",
      "Quy trình Thao tác hệ thống điện Quốc gia.",
      "Quy chuẩn Kỹ thuật Quốc gia về an toàn điện và Quy trình an toàn thủy, cơ, nhiệt, hóa do EVN ban hành",
      "Quy trình xử lý sự cố hệ thống điện Quốc gia do EVN ban hành",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "Quy định khoảng cách nằm ngang nhỏ nhất từ mép ngoài cùng của thân cột đến dây dẫn khi làm các công việc trên  đường dây 1 mạch, 02 mạch (bố trí dây dẫn bất kỳ), 04 và 06 mạch đang vận hành?",
    options: [
      "Đến điện áp 110kV nhỏ nhất  0,7m; Điện áp  220kV nhỏ nhất  2 m;  Điện áp  500kV nhỏ nhất  3m.",
      "Đến điện áp 110kV nhỏ nhất 1m; Điện áp  220kV nhỏ nhất 2 m;  Điện áp  500kV nhỏ nhất 5m.",
      "Đến điện áp 110kV nhỏ nhất  1,5m; Điện áp  220kV nhỏ nhất  2 m;  Điện áp  500kV nhỏ nhất  4m.",
      "Đến điện áp 110kV nhỏ nhất  1,5m; Điện áp  220kV nhỏ nhất  2,5 m;  Điện áp  500kV nhỏ nhất  4,5m. ",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Đường dây đang vận hành thì công việc tại móng cột, trèo lên cột dưới 2,0 m, không tháo dỡ cấu kiện cột được quy định như thế nào?",
    options: [
      "Làm việc 01 người có bậc 1 an toàn điện trở lên.",
      "Làm việc 01 người có bậc 3 an toàn điện trở lên.",
      "Làm việc 01 người có bậc 3 an toàn điện trở lên.",
      "Làm việc 02 người có bậc 2 an toàn điện trở lên.",
    ],
    correctAnswer: 2,
  },
  {
    question: "Các mối nguy nào cần phải nhận diện khi làm việc trên cao",
    options: [
      "Rơi thiết bi, dụng cụ, vật liệu xuống.",
      "Ngã cao",
      "Trượt đổ thang, sập giàn giáo.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question: "Người làm việc trên cao phải  sử dụng trang bị cá nhân nào ?",
    options: [
      "Quần áo bảo hộ lao động phải gọn gàng, tay áo buông và cài cúc. Mùa rét phải mặc đủ ấm.",
      "Phải đeo dây an toàn.",
      "Đội mũ an toàn cài quai, đi giày bảo hộ lao động phải buộc dây.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question: "Yêu cầu về sức khỏe của Người làm việc trên cao?",
    options: [
      "Phải có đầy đủ sức khỏe, không bị các bệnh truyền nhiễm, động kinh,... ",
      "Không có yêu cầu cụ thể.",
      "Phải có chứng nhận đủ sức khỏe của Cơ quan y tế có thẩm quyền, tuân thủ Quy định sức khỏe của người lao động làm việc trên cao thuộc EVN.",
      "Cả 3 đáp án đều sai.",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "Người nào thực hiện đánh giá sơ bộ tình trạng sức khỏe chuẩn bị làm việc trên cao ?",
    options: [
      "Người chỉ huy trực tiếp",
      "Người lãnh đạo công việc",
      "Người cho phép",
      "Người giám sát ATĐ",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Trong quá trình trèo lên cao hoặc đang làm việc nếu thấy sức khỏe không thể tiếp tục công việc thì Người làm việc trên cao phải báo cho Người nào? ",
    options: [
      "Người chỉ huy trực tiếp",
      "Người cho phép",
      "Người lãnh đạo việc",
      "Người cấp phiếu",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Không được phép làm việc trên cao ngoài trời trong điều kiện thời tiết nào?",
    options: [
      "Giông bão có gió tới cấp 5 hay trời mưa to nặng hạt hoặc có giông sét.",
      "Giông bão có gió từ cấp 5 trở lên hay trời mưa to tạo thành dòng hoặc có giông sét.",
      "Giông bão có gió tới cấp 6 hay trời mưa to nặng hạt hoặc có giông sét.",
      "Giông bão có gió tới cấp 4 hay trời mưa to nặng hạt hoặc có giông sét.",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Không được phép làm việc trên cao ngoài trời trong điều kiện nhiệt độ môi trường là bao nhiêu nếu không được trang bị phương tiện che nắng, làm mát",
    options: ["Trên 380C", "Trên 360C", "Trên 390C", "Trên 400C"],
    correctAnswer: 0,
  },
  {
    question: "Khi làm việc trên cao, các hành vi nào sau đây bị cấm ?",
    options: [
      "Sử dụng các chất kích thích, đồ uống có cồn; đùa nghịch, nói chuyện riêng, làm việc riêng, làm những việc ngoài nhiệm vụ được phân công.",
      "Leo trèo, đi lại một cách tùy tiện. Đưa dụng cụ, vật liệu lên cao hoặc từ trên cao xuống bằng cách tung, ném, mang vác dụng cụ, vật liệu nặng lên cao cùng với người",
      "Sử dụng điện thoại di động trong quá trình lên hoặc xuống. Cho vào túi quần, áo các dụng cụ, vật liệu nặng.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Quy định về kết cấu và chất lượng thang di động nào sau đây không đúng?",
    options: [
      "Thang di động là loại thang làm bằng tre, gỗ, kim loại, v.v. Vật liệu dùng làm thang bằng tre, gỗ phải chắc chắn và khô;",
      "Chiều rộng chân thang ít nhất là 40 cm;",
      " Khoảng cách giữa các bậc thang đều nhau và không lớn hơn 45 cm;",
      "Bậc thang không được đóng bằng đinh, bậc đầu và bậc cuối phải có chốt;",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Quy định về sử dụng dây đeo an toàn trong trường hợp nào dưới đây là đúng?",
    options: [
      "Dây đeo an toàn phải được thử 6 tháng 01 lần, bằng cách treo trọng lượng hoặc thiết bị thử dây an toàn chuyên dùng",
      "Trọng lượng thử đối với dây cũ là 225 kg, dây mới là 300 kg, thời gian thử 05 phút",
      "Trọng lượng thử đối với dây cũ là 220 kg, dây mới là 300 kg, thời gian thử 05 phút, trước khi sử dụng phải kiểm tra khóa, móc, đường chỉ… xem có bị rỉ hoặc đứt không, nếu nghi ngờ thì phải thử trọng lượng ngay",
      "Cả 3 đáp án đúng ",
    ],
    correctAnswer: 2,
  },
  {
    question: "Trọng lượng và thời gian thử của dây đeo an toàn?",
    options: [
      "Trọng lượng thử đối với dây cũ là 250 kg, dây mới là 300 kg, thời gian thử 05 phút.",
      "Trọng lượng thử đối với dây cũ là 225 kg, dây mới là 300 kg, thời gian thử 05 phút.",
      "Trọng lượng thử đối với dây cũ là 225 kg, dây mới là 250 kg, thời gian thử 05 phút.",
      "Trọng lượng thử đối với dây cũ là 225 kg, dây mới là 300 kg, thời gian thử 03 phút.",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Khi làm việc trên ĐDK cao áp đang vận hành, trong trường hợp nào được phép làm việc 01 người ?",
    options: [
      "Công việc tại móng cột.",
      "Công việc có trèo lên cột dưới 2,0m; không tháo dỡ các cấu kiện cột.",
      "Có bậc 3 ATĐ trở lên.",
      "Cả 3 đáp án.",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Công việc sơn xà và phần trên của cột đối với ĐDK đang vận hành phải?",
    options: [
      "Đảm bảo  khoảng cách  an toàn và người làm việc đã được đào tạo, thao diễn thực hành, sát hạch đạt yêu cầu.",
      "Cấm đứng thẳng để di chuyển người dọc theo xà. Khi sơn, tránh để sơn rơi lên dây dẫn và sứ, chổi sơn phải làm bằng cán gỗ hoặc vật liệu cách điện khoogn dài quá 10cm.",
      "Nếu phía trên có dây dẫn, dây chống sét thì phải đảm bảo khoảng cách an toàn theo quy định và khoảng cách đến các phần mang điện ",
      "Cả 3 đáp án.",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Khi làm việc với ĐDK điện cao áp có cấp điện áp 220kV; Nhân viên đơn vị công tác có sử dụng các trang bị, dụng cụ cho làm việc có điện thì khoảng cách cho phép nhỏ nhất đến phần có điện là bao nhiêu ?",
    options: ["2,5 m.", "1,8 m.", "2,0 m.", "3,0 m."],
    correctAnswer: 2,
  },
  {
    question:
      "Khi làm việc với ĐDK điện cao áp có cấp điện áp 500kV; Nhân viên đơn vị công tác có sử dụng các trang bị, dụng cụ cho làm việc có điện thì khoảng cách cho phép nhỏ nhất đến phần có điện là bao nhiêu ?",
    options: ["3,2 m.", "4,5 m.", "3,5 m.", "4,0 m."],
    correctAnswer: 3,
  },
  {
    question:
      "Các quy định đối với công việc vệ sinh cách điện ĐDK cao áp khi đang vận hành",
    options: [
      "Chất lượng nước.",
      "Áp lực nước phải đảm bảo theo quy trình.",
      "Nghiêm cấm sử dụng nước chưa đạt tiêu chuẩn về cách điện để vệ sinh cách điện hotline.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Điều kiện thời tiết khi thực hiện công việc vệ sinh cách điện ĐDK cao áp khi đang vận hành ?",
    options: [
      "Cấm thực hiện công việc khi có gió cấp 4 trở lên, khi có mưa phùn, mưa giông, sấm sét, sương mù.",
      "Điều kiện thời tiết bình thường",
      "Cấm thực hiện công việc khi độ ẩm không khí không đảm bảo an toàn theo quy trình",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Trong điều kiện thời tiết như thế nào thì phải dừng ngay công việc vệ sinh cách điện ĐDK cao áp khi đang vận hành ?",
    options: [
      "Nhận thấy trời có khả năng mưa giông, sấm sét ",
      "Có gió cấp 4 trở lên",
      "Có gió cấp 5 trở lên",
      "Có gió cấp 3 trở lên, mưa nặng hạt.",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Phải thực hiện các biện pháp an toàn khi làm công việc gần ĐDK cao áp đang vận hành trong trường hợp nào?",
    options: [
      "Làm việc trên đoạn ĐDK đã cắt điện, nhưng giao chéo với ĐDK đang vận hành.",
      "Làm việc trên ĐDK đã cắt điện nhưng đi chung cột với ĐDK đang vận hành.",
      "Làm việc trên đoạn ĐDK đã cắt điện nhưng có chiều dài từ 2,0 km trở lên đi bên cạnh hoặc song song và cách ĐDK 220kV đang vận hành với khoảng cách nhỏ hơn 150m.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Phải thực hiện các biện pháp an toàn khi làm công việc gần ĐDK cao áp đang vận hành trong trường hợp nào?",
    options: [
      "Làm việc trên đoạn ĐDK đã cắt điện nhưng có chiều dài từ 2,0 km trở lên đi bên cạnh hoặc song song và cách ĐDK 500kV đang vận hành với khoảng cách nhỏ hơn 200m.",
      "Làm việc trên đoạn đường dây đã cắt điện nhưng có chiều dài từ 3,0 km trở lên đi bên cạnh hoặc song song và cách đường dây 220kV  đang vận hành với khoảng cách nhỏ hơn 200 m.",
      "Làm việc trên đoạn đường dây đã cắt điện nhưng có chiều dài từ 3,5 km trở lên đi bên cạnh hoặc song song và cách đường dây 110kV đang vận hành với khoảng cách nhỏ hơn 150 m.",
      "Làm việc trên đoạn đường dây đã cắt điện nhưng có chiều dài từ 1,5 km trở lên đi bên cạnh hoặc song song và cách đường dây 500kV đang vận hành với khoảng cách nhỏ hơn 250 m.",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Làm việc trên đoạn ĐDK cao áp đã cắt điện nhưng có chiều dài từ 2,0 km trở lên đi bên cạnh hoặc song song và cách ĐDK đang vận hành với khoảng cách nhỏ hơn quy định là bao nhiêu được xem là làm gần ĐDK cao áp đang vận hành?",
    options: [
      "90m đối với cấp điện áp 110kV",
      "100m đối với cấp điện áp 110kV",
      "150m đối với cấp điện áp 110kV",
      "200m đối với cấp điện áp 110kV",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Làm việc trên đoạn ĐDK cao áp đã cắt điện nhưng có chiều dài từ 2,0 km trở lên đi bên cạnh hoặc song song và cách ĐDK đang vận hành với khoảng cách nhỏ hơn quy định là bao nhiêu được xem là làm gần ĐDK cao áp đang vận hành?",
    options: [
      "100m đối với cấp điện áp 220kV",
      "150m đối với cấp điện áp 220kV",
      "200m đối với cấp điện áp 220kV",
      "250m đối với cấp điện áp 220kV",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Làm việc trên đoạn đường dây đã cắt điện nhưng có chiều dài từ 2,0 km trở lên đi bên cạnh hoặc song song và cách đường dây đang vận hành với khoảng cách nhỏ hơn quy định là bao nhiêu được xem là làm gần đường dây đang vận hành?",
    options: [
      "100m đối với cấp điện áp 500kV",
      "150m đối với cấp điện áp 500kV",
      "200m đối với cấp điện áp 500kV",
      "250m đối với cấp điện áp 500kV",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "Khi làm việc trên ĐDK đã cắt điện nhưng giao chéo hoặc song song với ĐDK cao áp đang vận hành phải thực hiện quy định nào sau đây?",
    options: [
      "Nếu người và phương tiện làm việc không vi phạm khoảng cách an toàn cho phép hoặc áp dụng các biện pháp an toàn phòng tránh khác thì không phải cắt điện ĐDK ở gần với ĐDK sẽ làm việc.",
      "Không phải cắt điện đường dây ở gần với đường dây sẽ làm việc.",
      "Phải cắt điện đường dây ở gần với đường dây sẽ làm việc.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Làm việc trên ĐDK đã cắt điện nhưng giao chéo hoặc song song với ĐDK cao áp đang vận hành, khi thi công với khoảng cách nhỏ nhất cho phép giữa dây cáp thép (cáp hãm, kéo) và dây chằng thép tới dây dẫn của ĐDK đang vận hành có điện áp đến 35kV là?",
    options: ["1,5 m.", "2,0 m.", "2,5 m.", "3,0 m."],
    correctAnswer: 2,
  },
  {
    question:
      "Làm việc trên ĐDK đã cắt điện nhưng giao chéo hoặc song song với ĐDK cao áp đang vận hành, khi thi công với khoảng cách nhỏ nhất cho phép giữa dây cáp thép (cáp hãm, kéo) và dây chằng thép tới dây dẫn của ĐDK đang có điện áp đến 110kV là?",
    options: ["2,5 m.", "3,0 m. ", "3,5 m.", "2,8 m."],
    correctAnswer: 1,
  },
  {
    question:
      "Làm việc trên ĐDK đã cắt điện nhưng giao chéo hoặc song song với ĐDK cao áp đang vận hành, khi thi công với khoảng cách nhỏ nhất cho phép giữa dây cáp thép (cáp hãm, kéo) và dây chằng thép tới dây dẫn của ĐDK đang có điện áp đến 220kV là?",
    options: ["3,2 m.", "3,5 m.", "4,0 m.", "4,5 m."],
    correctAnswer: 2,
  },
  {
    question:
      "Làm việc trên ĐDK đã cắt điện nhưng giao chéo hoặc song song với ĐDK cao áp đang vận hành, khi thi công với khoảng cách nhỏ nhất cho phép giữa dây cáp thép (cáp hãm, kéo) và dây chằng thép tới dây dẫn của ĐDK đang có điện áp đến 500kV là?",
    options: ["5,0 m. ", "5,5 m.", "6,5 m.", "6,0 m."],
    correctAnswer: 3,
  },
  {
    question:
      "Khi sử dụng thiết bị, dụng cụ, phương tiện (trừ phương tiện phục vụ sửa chữa nóng) làm việc trong HLATLĐCA phải đảm bảo khoảng cách an toàn phóng điện nhỏ nhất đối với cấp điện áp 35kV là?",
    options: ["4,0 m.", "4,5 m.", "3,5 m.", "3,0 m."],
    correctAnswer: 0,
  },
  {
    question:
      "Khi sử dụng thiết bị, dụng cụ, phương tiện (trừ phương tiện phục vụ sửa chữa nóng) làm việc trong HLATLĐCA phải đảm bảo khoảng cách an toàn phóng điện nhỏ nhất đối với cấp điện áp 110kV là?",
    options: ["5,0 m. ", "6,0 m. ", "5,5 m.", "6,5 m."],
    correctAnswer: 1,
  },
  {
    question:
      "Khi sử dụng thiết bị, dụng cụ, phương tiện (trừ phương tiện phục vụ sửa chữa nóng) làm việc trong HLATLĐCA phải đảm bảo khoảng cách an toàn phóng điện nhỏ nhất đối với cấp điện áp 220kV là?",
    options: ["5,0 m. ", "5, 5 m", "6,0 m", "6,5 m."],
    correctAnswer: 2,
  },
  {
    question:
      "Khi sử dụng thiết bị, dụng cụ, phương tiện (trừ phương tiện phục vụ sửa chữa nóng) làm việc trong HLATLĐCA phải đảm bảo khoảng cách an toàn phóng điện nhỏ nhất đối với cấp điện áp 500kV là?",
    options: ["6,5 m.", "7,0 m.", "7,5 m.", "8,0 m. "],
    correctAnswer: 3,
  },
  {
    question:
      "Làm việc trên ĐDK  đã cắt điện nhưng di chung với ĐDK đang vận hành phải đảm bảo  khoảng cách nhỏ nhất giữa các dây dẫn gần nhất của hai mạch không nhỏ hơn đối với ĐDK có cấp điện áp đến 35kV là?",
    options: ["3,0 m.", "2,5 m. ", "2,0 m.", "1,5 m."],
    correctAnswer: 0,
  },
  {
    question:
      "Làm việc trên ĐDK  đã cắt điện nhưng di chug với ĐDK đang vận hành phải đảm bảo  khoảng cách nhỏ nhất giữa các dây dẫn gần nhất của hai mạch không nhỏ hơn đối với ĐDK có cấp điện áp đến 110kV là?",
    options: ["4,5 m.", "4,0 m.", "3,5 m.", "3,0 m."],
    correctAnswer: 1,
  },
  {
    question:
      "Làm việc trên ĐDK  đã cắt điện nhưng di chug với ĐDK đang vận hành phải đảm bảo  khoảng cách nhỏ nhất giữa các dây dẫn gần nhất của hai mạch không nhỏ hơn đối với ĐDK có cấp điện áp đến 220kV là?",
    options: ["5,0 m.", "7 m.", "6,0 m.", "6,5 m."],
    correctAnswer: 2,
  },
  {
    question:
      "Làm việc trên ĐDK  đã cắt điện nhưng di chug với ĐDK đang vận hành phải đảm bảo  khoảng cách nhỏ nhất giữa các dây dẫn gần nhất của hai mạch không nhỏ hơn đói với ĐDK có cấp điện áp đến 500kV là?",
    options: ["7,5 m.", "7,0 m.", "8,0 m.", "8,5 m."],
    correctAnswer: 3,
  },
  {
    question:
      "Khi lắp đặt ở trên cột của ĐDK nhiều mạch đang vận hành phải thực hiện những quy định nào sau đây?",
    options: [
      "Cấm dùng thước làm bằng thép (kim loại) để đo.",
      "Không buông thõng tự do các đầu dây thừng.",
      "Kéo lên cột hoặc thả xuống đất các chi tiết nhỏ và dụng cụ làm việc phải dùng dây thừng vô tận. Các chi tiết và dụng cụ chuyển lên cột bằng dây thừng vô tận chỉ được tháo ra khỏi dây này sau khi chúng đã được đặt vào vị trí và bắt chặt vào cột. Dụng cụ, đồ nghề phải đựng trong túi chuyên dùng.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Khi lắp đặt ở trên cột của ĐDK nhiều mạch đang vận hành, cấm người đến gần dây dẫn có điện với khoảng cách nhỏ nhất từ người (kể cả dụng cụ khi cầm, mang) đến dây dẫn có điện đối với cấp điện áp đến 35kV là? ",
    options: ["0,6 m.", "0,7 m.", "1,0 m.", "1,5 m."],
    correctAnswer: 0,
  },
  {
    question:
      "Khi lắp đặt ở trên cột của ĐDK nhiều mạch đang vận hành, cấm người đến gần dây dẫn có điện với khoảng cách nhỏ nhất từ người (kể cả dụng cụ khi cầm, mang) đến dây dẫn có điện đối với cấp điện áp trên 35kV đến 110kV là? ",
    options: ["0,6 m.", "1,0 m. ", "1,5 m.", "2,0 m."],
    correctAnswer: 1,
  },
  {
    question:
      "Khi lắp đặt ở trên cột của ĐDK nhiều mạch đang vận hành, cấm người đến gần dây dẫn có điện với khoảng cách nhỏ nhất từ người (kể cả dụng cụ khi cầm, mang) đến dây dẫn có điện đối với cấp điện áp 220kV là? ",
    options: ["1,0 m", "1,5 m.", "2,0 m", "2,5 m"],
    correctAnswer: 2,
  },
  {
    question:
      "Khi lắp đặt ở trên cột của ĐDK nhiều mạch đang vận hành, cấm người đến gần dây dẫn có điện với khoảng cách nhỏ nhất từ người (kể cả dụng cụ khi cầm, mang) đến dây dẫn có điện đối với cấp điện áp 500kV là? ",
    options: ["2,5 m.", "3,0 m", "3,5 m", "4,0 m."],
    correctAnswer: 3,
  },
  {
    question:
      "Khi dựng cột gần ĐDK với cấp điện áp 220kV đang vận hành, dây cáp kéo và cáp hãm phải bố trí sao cho khi dây cáp bị bật, đứt không thể văng về phía ĐDK cao áp đang vận hành với khoảng cách nhỏ nhất cho phép từ các dây cáp kéo, cáp hãm đến dây dẫn có điện là?",
    options: ["5,0 m. ", "6,0 m. ", "7,0 m. ", "8,0 m. "],
    correctAnswer: 1,
  },
  {
    question:
      "Khi dựng cột gần ĐDK với cấp điện áp 500kV đang vận hành, dây cáp kéo và cáp hãm phải bố trí sao cho khi dây cáp bị bật, đứt không thể văng về phía ĐDK cao áp đang vận hành với khoảng cách nhỏ nhất cho phép từ các dây cáp kéo, cáp hãm đến dây dẫn có điện là?",
    options: ["5,0 m. ", "6,0 m. ", "7,0 m. ", "8,0 m. "],
    correctAnswer: 3,
  },
  {
    question:
      "Khi làm việc với ĐDK hạ áp đang có điện phải thực hiện quy định nào sau đây?",
    options: [
      "Chân đi giày, tay phải đeo găng cách điện hạ áp, quần áo bảo hộ phải khô ráo",
      "Không có quy định",
      "Phải mang ủng cách điện hạ áp.",
      "Phải mang ủng cách điện cao áp.",
    ],
    correctAnswer: 0,
  },
  {
    question: "Các yêu cầu đối với người có bậc an toàn điện 1/5?",
    options: [
      "Kết quả huấn luyện lần đầu về lý thuyết và thực hành đạt 80% trở lên.",
      "Có kiến thức về những quy định chung để đảm bảo an toàn khi thực hiện công việc được giao.",
      "Sử dụng và quản lý trang thiết bị an toàn, phương tiện, dụng cụ làm việc được giao đúng quy định.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question: "Những công việc được làm khi có bậc an toàn điện 1/5?",
    options: [
      "Được làm các công việc không tiếp xúc với thiết bị hoặc dây dẫn mang điện.",
      "Tham gia phụ việc cho đơn vị công tác làm việc trên thiết bị.",
      "Được làm các công việc không tiếp xúc với thiết bị hoặc dây dẫn mang điện. Tham gia phụ việc cho đơn vị công tác làm việc trên thiết bị.",
      "Cả 03 đáp án đều sai.",
    ],
    correctAnswer: 2,
  },
  {
    question: "Các yêu cầu đối với người có bậc an toàn điện 2/5?",
    options: [
      "Hiểu rõ những quy định chung và biện pháp bảo đảm bảo an toàn khi thực hiện công việc được giao.",
      "Sử dụng và quản lý trang thiết bị an toàn, phương tiện, dụng cụ làm việc được giao đúng quy định.",
      "Hiểu rõ phương pháp tách nạn nhân ra khỏi nguồn điện.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question: "Những công việc được làm khi có bậc an toàn điện 2/5?",
    options: [
      "Làm phần công việc của bậc 1/5.",
      "Làm việc tại nơi đã được cắt điện hoàn toàn.",
      "Làm phần công việc của bậc 1/5. Làm việc tại nơi đã được cắt điện hoàn toàn.",
      "Cả 03 đáp án đều sai.",
    ],
    correctAnswer: 2,
  },
  {
    question: "Các yêu cầu đối với người có bậc an toàn điện 3/5?",
    options: [
      "Yêu cầu như đối với bậc 2/5.",
      "Có khả năng phát hiện vi phạm, hành vi không an toàn.",
      "Có kỹ năng kiểm tra, giám sát người làm việc ở ĐD hoặc thiết bị điện.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Ngoài công việc được làm như bậc an toàn điện 2/5, bậc an toàn điện 3/5 được phép làm việc?",
    options: [
      "Làm việc tại nơi được cắt điện từng phần; Làm việc trực tiếp với ĐD, thiết bị điện hạ áp đang mang điện.",
      "Thực hiện thao tác trên lưới điện cao áp.",
      "Kiểm tra trạm điện ĐD đang vận hành.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Ngoài các yêu cầu như người có bậc an toàn điện 3/5, người có bậc an toàn điện 4/5 có thêm yêu cầu nào?",
    options: [
      "Hiểu rõ trách nhiệm, phạm vi thực hiện của từng đơn vị công tác khi cùng tham gia thực hiện công việc.",
      "Có kỹ năng lập biện pháp an toàn để thực hiện công việc và tổ chức giám sát, theo dõi công nhân làm việc.",
      "Có khả năng phân tích, điều tra sự cố, tai nạn điện.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question: "Những công việc được làm khi có bậc an toàn điện 4/5?",
    options: [
      "Làm phần công việc của bậc 3/5.",
      "Làm việc trực tiếp với ĐD, thiết bị điện hạ áp, cao áp đang mang điện.",
      "Cấp phiếu công tác, lệnh công tác, chỉ huy trực tiếp, cho phép đơn vị công tác vào làm việc, giám sát đơn vị công tác làm việc trên ĐD, thiết bị điện cao áp.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question: "Các yêu cầu đối với người có bậc an toàn điện 5/5?",
    options: [
      "Yêu cầu như đối với bậc 4/5.\n\n",
      "Biết phối hợp với các đơn vị công tác khác, lãnh đạo công việc, tổ chức tiến hành các biện pháp an toàn và kiểm tra theo dõi thực hiện công việc.",
      "Yêu cầu như đối với bậc 4/5. Có kỹ năng phối hợp với các đơn vị công tác khác, lãnh đạo công việc, tổ chức tiến hành các biện pháp an toàn và kiểm tra theo dõi thực hiện công việc.\n\n",
      "Cả 03 đáp án đều sai.",
    ],
    correctAnswer: 2,
  },
  {
    question: "Những công việc được làm khi có bậc an toàn điện 5/5?",
    options: [
      "Cấp PCT, LCT.",
      "Thực hiện nhiệm vụ người lãnh đạo công việc.",
      "Làm toàn bộ công việc thuộc phạm vi được giao.",
      "Cả 3 đáp án đúng.",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Trong điều kiện bình thường con người tiếp xúc trực tiếp với điện áp xoay chiều độ lớn bao nhiêu là nguy hiểm đến tính mạng.",
    options: ["36 V.", "42 V.", "Trên 42 V", "30 V."],
    correctAnswer: 2,
  },
  {
    question: "Những bước cơ bản ban đầu để cứu người bị tai nạn điện là gì?",
    options: [
      "Tách nạn nhân ra khỏi mạch điện; Cứu chữa nạn nhân tại chỗ.",
      "Gọi cấp cứu 115.",
      "Cắt điện.",
      "Tùy theo từng trường hợp.",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Trong phương pháp hồi sinh tổng hợp: D (Danger - Loại trừ nguy hiểm), R (Response - Phản ứng), C (Circulation - Khôi phục hệ tuần hoàn), A (Airway - Khôi phục hệ hô hấp), B (Breathing - Hô hấp nhân tạo). Trình tự thực hiện phương pháp hồi sinh tổng hợp?",
    options: ["DRCAB", "DRCBA", "DRABC", "DCRAB"],
    correctAnswer: 0,
  },
  {
    question: "Biển báo an toàn điện được chia thành bao nhiêu loại?",
    options: [
      "Biển cấm, biển cảnh báo và biển chỉ dẫn",
      "Biển Dừng lại! Có điện nguy hiểm chết người, biển cảnh báo và biển chỉ dẫn",
      "Biển cấm, biển Cấm đóng điện! Có người đang làm việc và biển chỉ dẫn",
      "Biển cảnh báo và biển làm việc tại đây",
    ],
    correctAnswer: 0,
  },
  {
    question: "Đối với ĐDK, phải đặt biển báo nào ?",
    options: [
      "Cấm trèo! Điện áp cao nguy hiểm chết người",
      "Cấm lại gần! Có điện nguy hiểm chết người",
      "Dừng lại! Có điện nguy hiểm chết người",
      "Cấm vào! Điện áp cao nguy hiểm chết người",
    ],
    correctAnswer: 0,
  },
  {
    question: "Đối với đường cáp điện ngầm phải đặt biển báo nào ?",
    options: [
      "Cấm vào! Điện áp cao nguy hiểm chết người",
      "Cáp điện lực",
      "Dừng lại! Có điện nguy hiểm chết người",
      "Cả 3 đáp án đúng",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Đối với trạm điện có tường rào bao quanh phải đặt biển báo nào ?",
    options: [
      "Cấm vào! Điện áp cao nguy hiểm chết người",
      "Cấm lại gần! Có điện nguy hiểm chết người",
      "Dừng lại! Có điện nguy hiểm chết người",
      "Cấm trèo! Điện áp cao nguy hiểm chết người",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Trên bộ phận điều khiển, truyền động thiết bị đóng cắt đã cắt điện cho Đơn vị công tác làm việc phải treo biển báo nào ?",
    options: [
      "Cấm vào! Điện áp cao nguy hiểm chết người",
      "Cấm đóng điện! Có người đang làm việc",
      "Dừng lại! Có điện nguy hiểm chết người",
      "Cấm trèo! Điện áp cao nguy hiểm chết người",
    ],
    correctAnswer: 1,
  },
  {
    question: "Trên rào chắn về phía dễ nhìn thấy, phải đặt biển báo nào ?",
    options: [
      "Cấm vào! Điện áp cao nguy hiểm chết người",
      "Cấm đóng điện! Có người đang làm việc",
      "Dừng lại! Có điện nguy hiểm chết người",
      "Làm việc tại đây",
    ],
    correctAnswer: 2,
  },
  {
    question: "Tại khu vực làm việc đặt biển  báo?",
    options: [
      "Làm việc tại đây",
      "Vào hướng này",
      "Đã nối đất",
      "Cả 3 đáp án đúng",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Các dụng cụ an toàn nào sau đây được thử nghiệm theo tiêu chuẩn của nhà sản xuất?",
    options: [
      "Ghế cách điện.\nBút thử điện.",
      " Kìm cách điện.\nNối đất di động.",
      "Bộ quần, áo chống điện từ trường.\nThiết bị, dụng cụ làm việc mang điện áp.",
      "Cả 3 đáp án đúng",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Các dụng cụ an toàn nào sau đây được thử nghiệm theo tiêu chuẩn của Việt Nam?",
    options: [
      "Sào cách điện.",
      "Ủng cách điện.\nGăng cách điện",
      "Thảm cách điện.",
      "Cả 3 đáp án đúng",
    ],
    correctAnswer: 3,
  },
  {
    question: "Thời hạn thử nghiệm của Ủng cách điện?",
    options: [
      " 3 tháng/lần",
      "6 tháng/lần. ",
      " 12 tháng/lần. ",
      " 8 tháng/lần.",
    ],
    correctAnswer: 1,
  },
  {
    question: "Thời hạn thử nghiệm của Găng cách điện?",
    options: [" 12 tháng/lần", " 6 tháng/lần.", "3 tháng/lần", "24 tháng/lần"],
    correctAnswer: 1,
  },
  {
    question: "Thời hạn thử nghiệm của thảm cách điện?",
    options: [
      "3 tháng/lần.  ",
      "6 tháng/lần. ",
      " 12 tháng/lần. ",
      " 24 tháng/lần. ",
    ],
    correctAnswer: 3,
  },
  {
    question: "Thời hạn thử nghiệm của Sào cách điện?",
    options: [
      "3 tháng/lần.  ",
      "6 tháng/lần. ",
      " 12 tháng/lần. ",
      " 24 tháng/lần. ",
    ],
    correctAnswer: 2,
  },
  {
    question: "Thời hạn thử nghiệm của Ghế cách điện?",
    options: [
      " 12 tháng/lần",
      "6 tháng/lần",
      "36 tháng/lần.",
      " 24 tháng/lần.",
    ],
    correctAnswer: 2,
  },
];
