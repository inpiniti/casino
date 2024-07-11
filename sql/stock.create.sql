CREATE TABLE stock (
    flag TEXT, -- 국가 플래그
    symbol TEXT, -- 주식 심볼
    link TEXT, -- 주식 링크
    name TEXT, -- 이름 번역
    stock_symbol TEXT, -- 주식 심볼
    parent_pair_ID INTEGER, -- 부모 데이터 쌍의 ID
    canonical_to_pair_id INTEGER, -- 표준화된 데이터 쌍 ID
    override_country_ID INTEGER, -- 나라 ID를 덮어쓰기
    eq_pe_ratio FLOAT, -- 주가수익비율(P/E Ratio)
    eq_market_cap BIGINT, -- 시장가치(Market Capitalization)
    eq_one_year_return FLOAT, -- 1년 수익률
    eq_dividend FLOAT, -- 배당금
    eq_eps FLOAT, -- 주당순이익(EPS)
    eq_beta FLOAT, -- 베타값 (변동성 지표)
    eq_revenue BIGINT, -- 매출
    exchange_ID INTEGER, -- 거래소 ID
    security_type TEXT, -- 주식 종류 (우선주)
    a1fcf FLOAT, -- 자유현금흐름 (FCF)
    aastturn FLOAT, -- 총자산회전율
    abepsxclxo FLOAT, -- 특별항목 제외 주당 순이익(EPS)
    abvps FLOAT, -- 장부가치(BVPS)
    acfshr FLOAT, -- 주식당 현금흐름 (CFPS)
    acshps FLOAT, -- 주식당 현금 (CASHPS)
    acurratio FLOAT, -- 유동비율(Current Ratio)
    adiv5yavg FLOAT, -- 5년 평균 배당수익율
    aebitd FLOAT, -- 상각전 영업이익 (EBITDA)
    aebt FLOAT, -- 세전 순이익 (EBT)
    aebtnorm FLOAT, -- 정상세전 순이익 (Normalized EBT)
    aepsinclxo FLOAT, -- 특별항목 포함 주당 순이익 (EPS)
    aepsxclxor FLOAT, -- 특별항목 제외 주당 순이익 (EPS)
    agrosmgn FLOAT, -- 매출총이익률
    aintcov FLOAT, -- 이자보상비율
    ainvturn FLOAT, -- 재고자산 회전율
    altd2eq FLOAT, -- 부채비율
    aniac FLOAT, -- 순 이익 후 현금 (Net Income After Cash)
    aniacnorm FLOAT, -- 정규화된 순 이익 후 현금 (Normalized Net Income After Cash)
    aniperemp TEXT, -- 직원당 순이익 (NIA per Employee)
    anpmgnpct FLOAT, -- 순이익률
    aopmgnpct FLOAT, -- 영업이익률
    apayratio FLOAT, -- 배당지급비율
    apeexclxor FLOAT, -- 이번 분기 EPS (주당순이익, 특별항목 제외) 예상치
    apenorm FLOAT, -- 이번 분기 NPE (정규화된 예상 주당수익)
    apr2rev FLOAT, -- 주가 매출비율
    apr2tanbk FLOAT, -- 주가 순자산비율 (순자산 대비 주가비율)
    aprfcfps FLOAT, -- 주식당 자유현금흐름 (FCFPS)
    aprice2bk FLOAT, -- 주가 대비 장부가 비율
    aptmgnpct FLOAT, -- 최종 순이익률
    aquickrati FLOAT, -- 당좌비율 (Quick Ratio)
    arecturn FLOAT, -- 매출채권 회전율
    arevperemp TEXT, -- 직원당 매출
    arevps FLOAT, -- 주식당 매출(Revenue per Share)
    aroa5yavg FLOAT, -- 자산수익률 (ROA) 5년 평균
    aroapct FLOAT, -- 자산수익률 (ROA) 현재
    aroe5yavg FLOAT, -- 자기자본수익률 (ROE) 5년 평균
    aroepct FLOAT, -- 자기자본수익률 (ROE) 현재
    aroi5yravg FLOAT, -- 투자수익률 (ROI) 5년 평균
    aroipct FLOAT, -- 투자수익률 (ROI) 현재
    atanbvps FLOAT, -- 주식당 순자산 (Tangible BVPS)
    atotd2eq FLOAT, -- 총 부채 대비 자본 (Debt to Equity Ratio)
    bvtrendgr FLOAT, -- 장부가 성장률 (Book Value Growth Rate)
    country_id TEXT, -- 국가 ID (대한민국)
    csptrendgr FLOAT, -- 주당 매출 성장률 (Sales per Share Growth Rate)
    divyield_curttm FLOAT, -- 현재 배당수익률 (Current Dividend Yield)
    ebitda_ayr5cagr FLOAT, -- 상각전 영업이익 5년 CAGR
    ebitda_ttmy5cagr FLOAT, -- 상각전 영업이익 최근 5년 CAGR
    epschngyr FLOAT, -- 주당순이익 (EPS) 전년 대비 변화율
    epsgrpct FLOAT, -- 주당순이익 (EPS) 성장률
    epstrendgr FLOAT, -- 주당순이익 (EPS) 트렌드 성장률
    ev2fcf_cura FLOAT, -- 기업가치(Enterprise Value) 대비 FCF
    ev2fcf_curttm FLOAT, -- 기업가치(Enterprise Value) 대비 FCF (TTM)
    focf_ayr5cagr FLOAT, -- 자유현금흐름(FCF) 5년 CAGR
    grosmgn5yr FLOAT, -- 매출총이익률 5년 평균
    industry_id TEXT, -- 산업 ID
    margin5yr FLOAT, -- 순이익률 5년 평균
    mktcap FLOAT, -- 시장가치(Market Capitalization)
    netdebt_a FLOAT, -- 순부채(NETDEBT)
    netdebt_i FLOAT, -- 순부채(NETDEBT)
    npmtrendgr FLOAT, -- 순이익률 트렌드 성장률
    opmgn5yr FLOAT, -- 영업이익률 5년 평균
    pair_id INTEGER, -- 데이터 쌍 ID (중복 확인)
    pebexclxor FLOAT, -- 주가수익 비율 (P/E Ratio, 특별 항목 제외)
    peexclxor FLOAT, -- 주가수익 비율 (P/E Ratio, 특별 항목 제외)
    pr2tanbk FLOAT, -- 주가 대 순자산 비율 (Price to Tangible Book Value)
    price2bk FLOAT, -- 주가 대 장부가 비율 (Price to Book)
    ptmgn5yr FLOAT, -- 최종 순이익률 (Profit Margin) 5년 평균
    qbvps FLOAT, -- 주당 장부가치 (Quarterly BVPS)
    qcshps FLOAT, -- 주당 현금 (Quarterly CASHPS)
    qcurratio FLOAT, -- 유동비율 (Quarterly Current Ratio)
    qltd2eq FLOAT, -- 부채비율 (Quarterly LTD/EQ)
    qquickrati FLOAT, -- 당좌비율 (Quarterly Quick Ratio)
    qtanbvps FLOAT, -- 주당 순자산 (Quarterly Tangible BVPS)
    qtotd2eq FLOAT, -- 총 부채비율 (Quarterly Total Debt to Equity)
    revchngyr FLOAT, -- 매출변화율 (Revenue Change Year-over-Year)
    revgrpct FLOAT, -- 매출 성장률 (Revenue Growth Rate)
    revps5ygr FLOAT, -- 주당 매출 5년 성장률
    revtrendgr FLOAT, -- 매출 트렌드 성장률
    stld_ayr5cagr FLOAT, -- 유보이익 5년 CAGR
    ttmastturn FLOAT, -- 총자산회전율 (TTM)
    ttminvturn FLOAT, -- 재고자산 회전율 (TTM)
    ttmniac FLOAT, -- 순이익 후 현금 (TTM)
    ttmnpmgn FLOAT, -- 순이익률 (TTM)
    ttmopmgn FLOAT, -- 영업이익률 (TTM)
    ttmpayrat FLOAT, -- 배당지급비율 (TTM)
    ttmpr2rev FLOAT, -- 주가 매출비율 (TTM)
    ttmprcfps FLOAT, -- 주식당 현금흐름 (TTM)
    ttmprfcfps FLOAT, -- 주식당 자유현금흐름 (TTM)
    ttmptmgn FLOAT, -- 최종 순이익률 (TTM)
    ttmrecturn FLOAT, -- 매출채권 회전율 (TTM)
    ttmrevchg FLOAT, -- 매출 변화율 (TTM)
    ttmrevps FLOAT, -- 주당 매출 (TTM)
    ttmroapct FLOAT, -- 자산수익률 (ROA) (TTM)
    ttmroepct FLOAT, -- 자기자본수익률 (ROE) (TTM)
    ttmroipct FLOAT, -- 투자수익률 (ROI) (TTM)
    vdes_ttm FLOAT, -- 밸류에이션 수치 (TTM)
    yield FLOAT, -- 배당수익률
    yld5yavg FLOAT, -- 배당수익률 5년 평균
    RSI FLOAT, -- 상대강도지수 (RSI)
    STOCH FLOAT, -- 스토캐스틱 (Stochastic)
    CCI FLOAT, -- 상품채널지수 (CCI)
    MACD FLOAT, -- 이동평균수렴확산지수 (MACD)
    ADX FLOAT, -- 평균방향성지표 (ADX)
    WilliamsR FLOAT, -- 윌리엄스 %R
    STOCHRSI FLOAT, -- 스토캐스틱 RSI
    ATR FLOAT, -- 평균진폭 (ATR)
    HL FLOAT, -- 고저폭 (HL)
    UO FLOAT, -- 절대오실레이터(UO)
    ROC FLOAT, -- 가격변화율 (ROC)
    BullBear FLOAT, -- Bull/Bear 파워
    tech_sum_300 TEXT, -- 기술적 분석 요약 (5분 간격)
    tech_sum_900 TEXT, -- 기술적 분석 요약 (15분 간격)
    tech_sum_1800 TEXT, -- 기술적 분석 요약 (30분 간격)
    tech_sum_3600 TEXT, -- 기술적 분석 요약 (1시간 간격)
    tech_sum_18000 TEXT, -- 기술적 분석 요약 (5시간 간격)
    tech_sum_86400 TEXT, -- 기술적 분석 요약 (1일 간격)
    tech_sum_week TEXT, -- 기술적 분석 요약 (1주일 간격)
    tech_sum_month TEXT, -- 기술적 분석 요약 (1개월 간격)
    daily FLOAT, -- 일일 변화율
    sector_id INTEGER, -- 섹터 ID
    avg_volume INTEGER, -- 평균 거래량
    pair_change_percent FLOAT, -- 주식 가격 변화율
    a52_week_high INTEGER, -- 52주 최고가
    a52_week_low INTEGER, -- 52주 최저가
    turnover_volume INTEGER, -- 거래량
    last FLOAT, -- 최근 가격
    a52_week_high_diff FLOAT, -- 52주 최고가 대비 차이
    a52_week_low_diff FLOAT, -- 52주 최저가 대비 차이
    exchange_trans TEXT, -- 거래소 번역
    name_trans TEXT, -- 이름 번역
    sector_trans TEXT, -- 섹터 번역
    industry_trans TEXT, -- 산업 번역
    month_change FLOAT, -- 월간 변화율
    ytd FLOAT, -- 연초 대비 변화율 (Year-to-Date)
    week FLOAT, -- 주간 변화율
    month FLOAT, -- 월간 변화율
    year FLOAT, -- 연간 변화율
    "3year" FLOAT, -- 3년 변화율
    created_at timestamp 
);