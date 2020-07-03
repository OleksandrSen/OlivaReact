import React from 'react';
import './contacts.scss';

function Contacts() {
  return (
    <section className="contacts">
      <div className="container">
        <div className="row">
          <h2 className="col-12 contacts__title">Наші адреси:</h2>
          <div className="contacts-block col-12 col-md-4">
            <div className="contacts-block__address">
              <span className="contacts-block__city">м. Полтава,</span><br />
						вул. Гоголя, 19
					</div>
            <ul className="contacts-block__numbers">
              <li className="contacts-block__num">
                <a href="tel:+001 356-868-2454" className="contacts-block__num--link">
                  тел.: +38 (0532) 61-22-66
							</a>
              </li>
              <li className="contacts-block__num">
                <a href="tel:+001 356-868-2454" className="contacts-block__num--link">
                  тел.: +38 (099) 033-35-99
							</a>
              </li>
            </ul>
          </div>

          <div className="contacts-block col-12 col-md-4">
            <div className="contacts-block__address">
              <span className="contacts-block__city">м. Суми,</span><br />
						вул. Харківська, 2/1
					</div>
            <ul className="contacts-block__numbers">
              <li className="contacts-block__num">
                <a href="tel:+001 356-868-2454" className="contacts-block__num--link">
                  тел.: +38 (0542) 36-12-00
							</a>
              </li>
              <li className="contacts-block__num">
                <a href="tel:+001 356-868-2454" className="contacts-block__num--link">
                  тел.: +38 (099) 033-35-99
							</a>
              </li>
            </ul>
          </div>

          <div className="contacts-block col-12 col-md-4">
            <div className="contacts-block__address">
              <span className="contacts-block__city">м. Кременчук,</span><br />
						вул. Соборна, 16/9
					</div>
            <ul className="contacts-block__numbers">
              <li className="contacts-block__num">
                <a href="tel:+001 356-868-2454" className="contacts-block__num--link">
                  тел.: +38 (066) 45-60-355
							</a>
              </li>
              <li className="contacts-block__num">
                <a href="tel:+001 356-868-2454" className="contacts-block__num--link">
                  тел.: +38 (096) 00-87-399
							</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contacts;
