import { ChangeDetectorRef, Component, forwardRef, Injector, Input, OnInit } from '@angular/core';
import { ControlValueAccessor,  FormControl, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-button-answer',
  template: `
    <div class="can-toggle d-flex ">

      <input type="checkbox" [formControl]="frmInputCheckbox" [id]="CheckName">{{Label}}
<label [attr.for]="CheckName" >
        <div class="can-toggle__switch ml-3" data-checked="Si" data-unchecked="No"></div>
      </label>
    </div>
  `,
  styles: [`
    @mixin can-toggle-branding(
      $can-toggle-off-color: #ea0030,
      $can-toggle-on-color: #5fc054,
      $can-toggle-inactive-text: rgba(white, 0.5),
      $can-toggle-transition: cubic-bezier(0,1,0.5,1)
    )
    {

      input[type="checkbox"] {

        &[disabled] ~ label {
          color: rgba($can-toggle-off-color, 0.5);
        }

        &:focus ~ label, &:hover ~ label {
          .can-toggle__switch {
            background-color: $can-toggle-off-color;
            &:after { color: darken($can-toggle-off-color, 10%); }
          }
        }
        &:hover ~label { color: darken($can-toggle-off-color, 5%); }
        &:checked {
          ~ label {
            &:hover { color: darken($can-toggle-on-color, 3%); }

            .can-toggle__switch {
              background-color: lighten($can-toggle-on-color, 5%);
              &:after { color: darken($can-toggle-on-color, 5%); }
            }
          }

          &:focus, &:hover {
            ~ label {
              .can-toggle__switch {
                background-color: $can-toggle-on-color;
                &:after { color: darken($can-toggle-on-color, 10%); }
              }
            }
          }
        }
      }

      label {

        .can-toggle__label-text { flex: 1; }

        .can-toggle__switch {
          transition: background-color 0.3s $can-toggle-transition;
          background: lighten($can-toggle-off-color, 5%);
          &:before { color: $can-toggle-inactive-text; }
          &:after {
            // Autoprefixer choked here, so making the prefixes explicit
            -webkit-transition: -webkit-transform 0.3s $can-toggle-transition;
            transition: transform 0.3s $can-toggle-transition;
            color: $can-toggle-off-color;
          }
        }

      }
    }

    @mixin can-toggle-appearance
    (
      $can-toggle-width: 134px,
      $can-toggle-height: 36px,
      $can-toggle-border-radius: 4px,
      $can-toggle-offset: 2px,
      $can-toggle-label-font-size: 14px,
      $can-toggle-switch-font-size: 12px,
      $can-toggle-shadow: 0 3px 3px rgba(black, 0.4)
    )

    {
      $can-toggle-switch-width: $can-toggle-width/2;

      input[type="checkbox"] {

        &:focus ~ label, &:hover ~ label {
          .can-toggle__switch {
            &:after { box-shadow: $can-toggle-shadow; }
          }
        }

        &:checked {
          ~ label {
            .can-toggle__switch {
              &:after { transform: translate3d($can-toggle-width - ($can-toggle-switch-width + $can-toggle-offset),0,0); }
            }
          }
          &:focus, &:hover {
            ~ label {
              .can-toggle__switch { &:after { box-shadow: $can-toggle-shadow; } }
            }
          }
        }
      }

      label {
        font-size: $can-toggle-label-font-size;

        .can-toggle__switch {
          height: $can-toggle-height;
          flex: 0 0 $can-toggle-width;
          border-radius: $can-toggle-border-radius;

          &:before {
            left: $can-toggle-width/2;
            font-size: $can-toggle-switch-font-size;
            line-height: $can-toggle-height;
            width: $can-toggle-width/2;
            padding: 0 12px;
          }

          &:after {
            top: $can-toggle-offset; left: $can-toggle-offset;
            border-radius: $can-toggle-border-radius/2;
            width: $can-toggle-switch-width - $can-toggle-offset;
            line-height: $can-toggle-height - ($can-toggle-offset*2);
            font-size: $can-toggle-switch-font-size;
          }

          &:hover {
            &:after { box-shadow: $can-toggle-shadow; }
          }
        }
      }
    }

    .can-toggle {
      position: relative;
      *, *:before, *:after { box-sizing: border-box; }
      //overflow: hidden;

      input[type="checkbox"] {
        opacity: 0;
        position: absolute;
        top: 0; left: 0;

        &[disabled] ~ label {
          pointer-events: none;
          .can-toggle__switch { opacity: 0.4; }
        }

        &:checked {
          ~ label {

            .can-toggle__switch {

              &:before {
                content: attr(data-unchecked);
                left: 0;
              }

              &:after {
                content: attr(data-checked);
              }
            }
          }

          &:focus, &:hover {
            ~ label {
            }
          }
        }
      }

      label {
        user-select: none;
        position: relative;
        display: flex;
        align-items: center;

        .can-toggle__label-text {
          flex: 1;
          padding-left: 32px;
        }

        .can-toggle__switch {
          position: relative;

          &:before {
            content: attr(data-checked);
            position: absolute;
            top: 0;
            text-transform: uppercase;
            text-align: center;
          }

          &:after {
            content: attr(data-unchecked);
            position: absolute;
            z-index: 5;
            text-transform: uppercase;
            text-align: center;
            background: white;
            transform: translate3d(0,0,0);
          }

        }

      }

      // Default values for .can-toggle class
      @include can-toggle-branding;
      @include can-toggle-appearance;

      // Create toggles of different sizes by overriding the can-toggle-appearance mixin defaults
      &.can-toggle--size-small {
        @include can-toggle-appearance
        (
          90px, // Toggle width
          28px,  // Toggle height
          2px,   // Toggle border radius
          1px,   // Offset (distance btw switch and box)
          13px,  // Label font size
          10px,  // Switch font size
          0 2px 2px rgba(black, 0.4) // Switch shadow on hover/focus
        );
      }
    }
    `],
    providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => ButtonAnswerComponent),
        multi: true
      },
    ],
})
export class ButtonAnswerComponent implements OnInit, ControlValueAccessor {
  @Input() Label:string|undefined=''
  @Input() CheckName:string|undefined='id'

  ngControl: NgControl | undefined;

  get value(): boolean {
    return this.frmInputCheckbox.value();
  }
  set value(d: boolean) {
      this.frmInputCheckbox.setValue(d);
  }

  onTouched: any = () => { };
  onChanged: any = () => { };

  frmInputCheckbox= new FormControl(false)


  constructor(
    private inj: Injector,
    private cdref: ChangeDetectorRef,
    ) { }

  writeValue(value: boolean): void {

      this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  // setDisabledState?(isDisabled: boolean): void {
  //   throw new Error('Method not implemented.');
  // }

  ngOnInit(): void {
    this.ngControl = this.inj.get(NgControl);
  }

  onClickHandler(e:any){
    console.log(e);
  }
}
