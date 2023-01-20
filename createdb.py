
import os
import sqlalchemy as sa

def create_walked():
    constring = os.environ["DATABASE_URL"]
    md = sa.MetaData(constring, schema='dbo')

    walked = sa.Table(
        "walked",
        md,
        sa.Column("record_id", sa.Integer, primary_key=True),
        sa.Column("distance", sa.Float, nullable=False),
        sa.Column("date", sa.DateTime, nullable=False),
        schema = 'dbo',
        extend_existing=True
    )

    with md.bind.connect() as cnxn:
        os.environ['PGOPTIONS'] = '-c statement_timeout=10'
        if not md.bind.dialect.has_schema(md.bind, 'dbo'):
            md.bind.execute(sa.schema.CreateSchema('dbo'))
        walked.create(checkfirst=True)