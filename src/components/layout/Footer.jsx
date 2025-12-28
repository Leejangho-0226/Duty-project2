export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* 1열: 회사 정보 */}
        <div>
          <div className="footer__title">회사 정보</div>

          <p className="footer__text">프로리 솔루션</p>
          <p className="footer__text">대표자 : 박유경</p>
          <p className="footer__text">
            02832 서울특별시 동대문구 경희대로26<br />
            삼의원창업센터 307호
          </p>
          <p className="footer__text">
            사업자등록번호 : 870-29-01466
          </p>
          <p className="footer__text">
            통신판매업 신고번호 : 제 2023-서울성북-1283
          </p>
        </div>

        {/* 2열: 연락처 */}
        <div>
          <div className="footer__title">연락처</div>

          <p className="footer__text">TEL : 010-8490-1181</p>
          <p className="footer__text">Mail : prore0606@gmail.com</p>
          <p className="footer__text">
            고객센터 : 평일 am 9:00 ~ pm 18:00
          </p>
        </div>

        {/* 3열: 기타 정보 */}
        <div>
          <div className="footer__title">기타 정보</div>

          <p className="footer__text">개인정보관리책임자 : 김여명</p>
          <p className="footer__text">아이콘 사용 출처 : Freepik</p>
        </div>
      </div>

      <div className="footer__bottom">
        Copyright © 프로리 솔루션 Inc. All Rights Reserved.
      </div>
    </footer>
  );
}
