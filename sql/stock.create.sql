CREATE TABLE stock (
    "name" TEXT,
    "description" TEXT,
    logoid TEXT,
    update_mode TEXT,
    "type" TEXT,
    "close" NUMERIC,
    pricescale NUMERIC,
    minmov NUMERIC,
    fractional TEXT,
    minmove2 NUMERIC,
    currency TEXT,
    change NUMERIC,
    volume NUMERIC,
    relative_volume_10d_calc NUMERIC,
    market_cap_basic NUMERIC,
    fundamental_currency_code TEXT,
    price_earnings_ttm NUMERIC,
    earnings_per_share_diluted_ttm NUMERIC,
    earnings_per_share_diluted_yoy_growth_ttm NUMERIC,
    dividends_yield_current NUMERIC,
    sector_tr TEXT,
    market TEXT,
    sector TEXT,
    recommendation_mark NUMERIC,
    exchange TEXT,
    perf_w NUMERIC,
    perf_1_m NUMERIC,
    perf_3_m NUMERIC,
    perf_6_m NUMERIC,
    perf_y_t_d NUMERIC,
    perf_y NUMERIC,
    perf_5_y NUMERIC,
    perf_10_y NUMERIC,
    perf_all NUMERIC,
    volatility_w NUMERIC,
    volatility_m NUMERIC,
    premarket_close NUMERIC,
    premarket_change NUMERIC,
    premarket_gap NUMERIC,
    premarket_volume NUMERIC,
    gap NUMERIC,
    volume_change NUMERIC,
    postmarket_close NUMERIC,
    postmarket_change NUMERIC,
    postmarket_volume NUMERIC,
    perf_1_y_market_cap NUMERIC,
    price_earnings_growth_ttm NUMERIC,
    price_sales_current NUMERIC,
    price_book_fq NUMERIC,
    price_to_cash_f_operating_activities_ttm NUMERIC,
    price_free_cash_flow_ttm NUMERIC,
    price_to_cash_ratio NUMERIC,
    enterprise_value_current NUMERIC,
    enterprise_value_to_revenue_ttm NUMERIC,
    enterprise_value_to_ebit_ttm NUMERIC,
    enterprise_value_ebitda_ttm NUMERIC,
    dps_common_stock_prim_issue_fy NUMERIC,
    dps_common_stock_prim_issue_fq NUMERIC,
    dividends_yield NUMERIC,
    dividend_payout_ratio_ttm NUMERIC,
    dps_common_stock_prim_issue_yoy_growth_fy NUMERIC,
    continuous_dividend_payout NUMERIC,
    continuous_dividend_growth NUMERIC,
    gross_margin_ttm NUMERIC,
    operating_margin_ttm NUMERIC,
    pre_tax_margin_ttm NUMERIC,
    net_margin_ttm NUMERIC,
    free_cash_flow_margin_ttm NUMERIC,
    return_on_assets_fq NUMERIC,
    return_on_equity_fq NUMERIC,
    return_on_invested_capital_fq NUMERIC,
    research_and_dev_ratio_ttm NUMERIC,
    sell_gen_admin_exp_other_ratio_ttm NUMERIC,
    total_assets_fq NUMERIC,
    total_current_assets_fq NUMERIC,
    cash_n_short_term_invest_fq NUMERIC,
    total_liabilities_fq NUMERIC,
    total_debt_fq NUMERIC,
    net_debt_fq NUMERIC,
    total_equity_fq NUMERIC,
    current_ratio_fq NUMERIC,
    quick_ratio_fq NUMERIC,
    debt_to_equity_fq NUMERIC,
    cash_n_short_term_invest_to_total_debt_fq NUMERIC,
    cash_f_operating_activities_ttm NUMERIC,
    cash_f_investing_activities_ttm NUMERIC,
    cash_f_financing_activities_ttm NUMERIC,
    free_cash_flow_ttm NUMERIC,
    capital_expenditures_ttm NUMERIC,
    recommend_all NUMERIC,
    recommend_m_a NUMERIC,
    recommend_other NUMERIC,
    r_s_i NUMERIC,
    mom NUMERIC,
    a_o NUMERIC,
    c_c_i20 NUMERIC,
    stoch_k NUMERIC,
    stoch_d NUMERIC,
    created_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (name, volume, created_at)
);