# Geophox website

# Migrating to production

1. Set up virtualenv in `~/www/geophox_mainsite/` with Py3.6:

`source website_env/bin/activate`

`pip install -r requirements.txt`

2. Repeat in `/srv/geophox_mainsite/www/geophox_mainsite`

3. Add following to `*venv*/bin/activate`:

`SITE_CONFIG=../configs/dev_config.json`

`export SITE_CONFIG`

4. Collect statics to STATICROOT (`/var/www/static`):

`sudo chown -R nilsnolde:nilsnolde /var/www/static`

`python manage.py collectstatic`

`sudo chown -R root:root /var/www/static`

5. Open port on ISP homepage!!!

6. Test dev setup and Gunicorn

`gunicorn --bind 0.0.0.0:8000 geophox_mainsite.wsgi`

7. Create Gunicorn `systemd` service file

    `sudo nano /etc/systemd/system/gunicorn.service`
    [Unit]
    Description=gunicorn daemon
    After=network.target

    [Service]
    User=nilsnolde
    Group=www-data
    WorkingDirectory=/srv/geophox_mainsite/www/geophox_mainsite
    ExecStart=/srv/geophox_mainsite/www/geophox_mainsite/website_env_prod/bin/gunicorn **-e SITE_CONFIG=/srv/geophox_mainsite/www/geophox_mainsite/geophox_mainsite/configs/prod_config.json** --access-logfile - --bind unix:/srv/geophox_mainsite/www/geophox_mainsite/geophox_mainsite.sock geophox_mainsite.wsgi:application

    [Install]
    WantedBy=multi-user.target

    `sudo systemctl start gunicorn`

    `sudo systemctl enable gunicorn`
