"""empty message

Revision ID: 8a69591d02eb
Revises: 145f6d00c209
Create Date: 2019-12-23 08:35:45.498841

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8a69591d02eb'
down_revision = '145f6d00c209'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('post', sa.Column('archive', sa.Boolean(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('post', 'archive')
    # ### end Alembic commands ###
