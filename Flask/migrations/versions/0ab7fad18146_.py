"""empty message

Revision ID: 0ab7fad18146
Revises: 8a69591d02eb
Create Date: 2019-12-23 08:43:52.244871

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0ab7fad18146'
down_revision = '8a69591d02eb'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('post', sa.Column('active', sa.Boolean(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('post', 'active')
    # ### end Alembic commands ###
