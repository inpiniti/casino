CREATE TABLE ai_models (
    model_id SERIAL PRIMARY KEY,      -- 고유 식별자
    training_date TIMESTAMP NOT NULL, -- 학습 일자
    model_file BYTEA,                  -- 모델 파일을 바이너리 형태로 저장
    country TEXT,
    market TEXT,
    sector TEXT,
    industry TEXT
);