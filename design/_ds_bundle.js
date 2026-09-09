/* @ds-bundle: {"format":4,"namespace":"WayixDesignSystem_d17f72","components":[{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"ConnectionCard","sourcePath":"components/feedback/ConnectionCard.jsx"},{"name":"VoiceBlob","sourcePath":"components/feedback/VoiceBlob.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"SegmentedControl","sourcePath":"components/forms/SegmentedControl.jsx"},{"name":"Stepper","sourcePath":"components/forms/Stepper.jsx"},{"name":"BackButton","sourcePath":"components/navigation/BackButton.jsx"},{"name":"TransportBar","sourcePath":"components/navigation/TransportBar.jsx"},{"name":"TurnRow","sourcePath":"components/navigation/TurnRow.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"NavInfoCard","sourcePath":"components/surfaces/NavInfoCard.jsx"},{"name":"Checkpoint","sourcePath":"components/tracking/Checkpoint.jsx"},{"name":"GroupMap","sourcePath":"components/tracking/GroupMap.jsx"},{"name":"RiderListRow","sourcePath":"components/tracking/RiderListRow.jsx"},{"name":"RiderMarker","sourcePath":"components/tracking/RiderMarker.jsx"},{"name":"RoleBadge","sourcePath":"components/tracking/RoleBadge.jsx"}],"sourceHashes":{"components/core/Icon.jsx":"808d12181cde","components/feedback/ConnectionCard.jsx":"619da9eafb09","components/feedback/VoiceBlob.jsx":"0e3141b3b0e1","components/forms/Button.jsx":"1cb4fc8922bc","components/forms/IconButton.jsx":"2d5cd4786a2e","components/forms/Input.jsx":"57496028a580","components/forms/SegmentedControl.jsx":"73bf0ac34c43","components/forms/Stepper.jsx":"ee0e89fa3d9f","components/navigation/BackButton.jsx":"d8213fae7990","components/navigation/TransportBar.jsx":"5b6baba31d73","components/navigation/TurnRow.jsx":"8468f60510fe","components/surfaces/Card.jsx":"dce457d8bb3a","components/surfaces/NavInfoCard.jsx":"9d86f8ca1f15","components/tracking/Checkpoint.jsx":"b374f729e8cf","components/tracking/GroupMap.jsx":"99219e2f41c7","components/tracking/RiderListRow.jsx":"02ff468687cd","components/tracking/RiderMarker.jsx":"5317942fb348","components/tracking/RoleBadge.jsx":"0cc89e7e010a","ui_kits/wayix-app/App.jsx":"1a661286d26e","ui_kits/wayix-app/GroupRide.jsx":"4d45198d24a0","ui_kits/wayix-app/MiniMap.jsx":"f8fd872978a7","ui_kits/wayix-app/Navigation.jsx":"8432691d6b9e","ui_kits/wayix-app/Onboarding.jsx":"2676ddce48cd","ui_kits/wayix-app/PhoneFrame.jsx":"1aa3cbcf9633","ui_kits/wayix-app/Preferences.jsx":"b4ef301ba7bc","ui_kits/wayix-app/RoutePreview.jsx":"fa0acb9bc151","ui_kits/wayix-app/Splash.jsx":"fb637ac342a3","ui_kits/wayix-app/Voice.jsx":"f3347a5cf6c2"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WayixDesignSystem_d17f72 = window.WayixDesignSystem_d17f72 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Lucide (MIT) icon paths — SUBSTITUTED for RideInSync's proprietary thin-rounded glyph set.
const PATHS = {
  'chevron-left': '<path d="m15 18-6-6 6-6"/>',
  'chevron-right': '<path d="m9 18 6-6-6-6"/>',
  play: '<polygon points="6 3 20 12 6 21 6 3"/>',
  'skip-back': '<polygon points="19 20 9 12 19 4 19 20"/><line x1="5" x2="5" y1="19" y2="5"/>',
  'skip-forward': '<polygon points="5 4 15 12 5 20 5 4"/><line x1="19" x2="19" y1="5" y2="19"/>',
  plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
  minus: '<path d="M5 12h14"/>',
  'turn-right': '<polyline points="15 14 20 9 15 4"/><path d="M4 20v-7a4 4 0 0 1 4-4h12"/>',
  'turn-left': '<polyline points="9 14 4 9 9 4"/><path d="M20 20v-7a4 4 0 0 0-4-4H4"/>',
  straight: '<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',
  incline: '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
  flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/>',
  phone: '<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',
  bluetooth: '<path d="m7 7 10 10-5 5V2l5 5L7 17"/>',
  projector: '<path d="M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"/><path d="M2 12a9 9 0 0 1 8 8"/><path d="M2 16a5 5 0 0 1 4 4"/><line x1="2" x2="2.01" y1="20" y2="20"/>',
  navigation: '<polygon points="3 11 22 2 13 21 11 13 3 11"/>',
  mic: '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>',
  check: '<path d="M20 6 9 17l-5-5"/>'
};
function Icon({
  name,
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: 'block',
      flex: 'none',
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: PATHS[name] || ''
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ConnectionCard.jsx
try { (() => {
function Node({
  icon
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 'var(--radius-full)',
      background: 'var(--color-surface-3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 24,
    color: "var(--color-text-primary)"
  }));
}
function ConnectionCard({
  status = 'Connecting…',
  connected = false,
  style
}) {
  const line = {
    flex: 1,
    height: 2,
    background: connected ? 'var(--color-accent)' : 'var(--color-surface-3)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-surface-2)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-lg)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Node, {
    icon: "phone"
  }), /*#__PURE__*/React.createElement("div", {
    style: line
  }), /*#__PURE__*/React.createElement(Node, {
    icon: "bluetooth"
  }), /*#__PURE__*/React.createElement("div", {
    style: line
  }), /*#__PURE__*/React.createElement(Node, {
    icon: "projector"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-md)',
      textAlign: 'center',
      color: connected ? 'var(--color-accent)' : 'var(--color-text-secondary)',
      fontSize: 'var(--text-label)',
      fontWeight: 'var(--weight-medium)'
    }
  }, status));
}
Object.assign(__ds_scope, { ConnectionCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ConnectionCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/VoiceBlob.jsx
try { (() => {
function VoiceBlob({
  state = 'idle',
  size = 220,
  style
}) {
  const active = state !== 'idle';
  const h = state === 'speaking' ? size * 0.9 : state === 'listening' ? size * 0.7 : size * 0.42;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: size,
      height: size * 0.6,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      width: size,
      height: size * 0.9,
      background: 'radial-gradient(60% 60% at 50% 100%, var(--color-accent-glow), transparent 70%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: size * 0.82,
      height: h,
      borderRadius: '50% 50% 42% 42% / 70% 70% 40% 40%',
      background: active ? 'radial-gradient(120% 100% at 50% 100%, var(--color-accent-bright), var(--color-accent-deep))' : 'radial-gradient(120% 100% at 50% 100%, var(--color-accent), var(--color-accent-deep))',
      opacity: active ? 1 : 0.85,
      transition: 'height .3s ease, opacity .3s ease',
      boxShadow: '0 0 60px 10px var(--color-accent-glow)'
    }
  }));
}
Object.assign(__ds_scope, { VoiceBlob });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/VoiceBlob.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = 'primary',
  children,
  iconLeft,
  iconRight,
  disabled,
  loading,
  fullWidth = true,
  style,
  onClick,
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-xs)',
    width: fullWidth ? '100%' : 'auto',
    height: 'var(--control-height)',
    padding: '0 var(--space-lg)',
    border: 'none',
    borderRadius: 'var(--radius-full)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontFamily: 'var(--font-ui)',
    fontSize: 'var(--text-body-size)',
    fontWeight: 'var(--weight-semibold)',
    lineHeight: 1,
    transition: 'background .15s ease, opacity .15s ease',
    outline: 'none'
  };
  const variants = {
    primary: {
      background: 'var(--color-accent)',
      color: 'var(--color-text-on-accent)'
    },
    secondary: {
      background: 'var(--color-surface-2)',
      color: 'var(--color-text-primary)',
      border: '1px solid var(--color-divider)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-text-primary)'
    }
  };
  const disabledStyle = disabled ? {
    background: 'var(--color-surface-3)',
    color: 'var(--color-text-tertiary)',
    border: 'none'
  } : null;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled || loading,
    onClick: onClick,
    style: {
      ...base,
      ...variants[variant],
      ...disabledStyle,
      ...style
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: 20
  }), loading ? 'Loading…' : children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: 20
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  name,
  size = 48,
  iconSize = 22,
  variant = 'surface',
  accent,
  style,
  ...rest
}) {
  const bg = variant === 'accent' ? 'var(--color-accent)' : variant === 'surface-4' ? 'var(--color-surface-4)' : 'var(--color-surface-3)';
  const color = variant === 'accent' ? 'var(--color-text-on-accent)' : 'var(--color-text-primary)';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": name,
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--radius-full)',
      border: 'none',
      background: bg,
      color,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'background .15s ease',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: iconSize
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  value,
  placeholder,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("input", _extends({
    value: value,
    placeholder: placeholder,
    onChange: onChange,
    style: {
      width: '100%',
      height: 'var(--input-height)',
      padding: '0 var(--space-md)',
      boxSizing: 'border-box',
      background: 'var(--color-surface-2)',
      border: '1px solid transparent',
      borderRadius: 'var(--radius-md)',
      color: 'var(--color-text-primary)',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-body-size)',
      outline: 'none',
      transition: 'border-color .15s ease'
    },
    onFocus: e => e.target.style.borderColor = 'var(--color-accent)',
    onBlur: e => e.target.style.borderColor = 'transparent'
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/SegmentedControl.jsx
try { (() => {
function SegmentedControl({
  options = ['Low', 'Medium', 'High'],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 4,
      padding: 4,
      background: 'var(--color-surface-3)',
      borderRadius: 'var(--radius-full)',
      ...style
    }
  }, options.map(opt => {
    const active = opt === value;
    return /*#__PURE__*/React.createElement("button", {
      key: opt,
      type: "button",
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(opt),
      style: {
        flex: 1,
        height: 40,
        border: 'none',
        borderRadius: 'var(--radius-full)',
        cursor: 'pointer',
        background: active ? 'var(--color-inverse-surface)' : 'transparent',
        color: active ? 'var(--color-text-on-inverse)' : 'var(--color-text-secondary)',
        fontFamily: 'var(--font-ui)',
        fontSize: 'var(--text-label)',
        fontWeight: active ? 'var(--weight-semibold)' : 'var(--weight-medium)',
        transition: 'background .15s ease'
      }
    }, opt);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/forms/Stepper.jsx
try { (() => {
function Stepper({
  value,
  display,
  min,
  max,
  step = 1,
  onChange,
  style
}) {
  const atMin = min != null && value <= min;
  const atMax = max != null && value >= max;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-md)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    name: "minus",
    variant: "surface-4",
    disabled: atMin,
    style: atMin ? {
      opacity: .4
    } : null,
    onClick: () => !atMin && onChange && onChange(value - step)
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 96,
      textAlign: 'center',
      color: 'var(--color-text-primary)',
      fontFamily: 'var(--font-numeric)',
      fontVariantNumeric: 'tabular-nums',
      fontSize: 'var(--text-body-size)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, display != null ? display : value), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    name: "plus",
    variant: "surface-4",
    disabled: atMax,
    style: atMax ? {
      opacity: .4
    } : null,
    onClick: () => !atMax && onChange && onChange(value + step)
  }));
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BackButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function BackButton({
  onClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": "Back",
    onClick: onClick,
    style: {
      width: 40,
      height: 40,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--color-text-primary)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-left",
    size: 26
  }));
}
Object.assign(__ds_scope, { BackButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BackButton.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TransportBar.jsx
try { (() => {
function TransportBar({
  startLabel = '0 ft',
  endLabel = '1.4 mi',
  progress = 30,
  playing = false,
  onToggle,
  onPrev,
  onNext,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-sm)',
      padding: 'var(--space-md)',
      background: 'var(--color-surface-1)',
      borderRadius: 'var(--radius-full)',
      boxShadow: 'var(--shadow-card)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 4,
      borderRadius: 999,
      background: 'var(--color-surface-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: progress + '%',
      background: 'var(--color-accent)',
      borderRadius: 999
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '50%',
      left: progress + '%',
      width: 12,
      height: 12,
      borderRadius: 999,
      background: 'var(--color-accent-bright)',
      transform: 'translate(-50%,-50%)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-text-secondary)',
      fontSize: 'var(--text-caption)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, startLabel), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    name: "skip-back",
    variant: "surface",
    size: 40,
    iconSize: 18,
    onClick: onPrev
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    name: playing ? 'straight' : 'play',
    variant: "accent",
    size: 52,
    iconSize: 22,
    onClick: onToggle
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    name: "skip-forward",
    variant: "surface",
    size: 40,
    iconSize: 18,
    onClick: onNext
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-text-secondary)',
      fontSize: 'var(--text-caption)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, endLabel)));
}
Object.assign(__ds_scope, { TransportBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TransportBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TurnRow.jsx
try { (() => {
function TurnRow({
  icon = 'turn-right',
  distance,
  street,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-md)',
      padding: 'var(--space-sm) 0',
      borderBottom: '1px solid var(--color-divider)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22,
    color: "var(--color-text-primary)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--color-text-primary)',
      fontSize: 'var(--text-body-size)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, distance), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--color-text-secondary)',
      fontSize: 'var(--text-caption)'
    }
  }, street)));
}
Object.assign(__ds_scope, { TurnRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TurnRow.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  elevated,
  glow,
  padding = 'var(--space-md)',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: elevated ? 'var(--color-surface-1)' : 'var(--color-surface-2)',
      borderRadius: 'var(--radius-lg)',
      padding,
      boxShadow: glow ? 'var(--glow-accent)' : 'var(--shadow-card)',
      color: 'var(--color-text-primary)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/NavInfoCard.jsx
try { (() => {
function NavInfoCard({
  icon = 'turn-right',
  metric,
  descriptor,
  progress = 0,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-surface-1)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-md)',
      boxShadow: 'var(--shadow-card)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      flex: 'none',
      borderRadius: 'var(--radius-full)',
      background: 'var(--color-surface-3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 24,
    color: "var(--color-accent)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--color-text-primary)',
      fontFamily: 'var(--font-numeric)',
      fontSize: 'var(--text-metric)',
      lineHeight: 'var(--lh-metric)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, metric), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--color-text-secondary)',
      fontSize: 'var(--text-label)'
    }
  }, descriptor))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-md)',
      height: 4,
      borderRadius: 999,
      background: 'var(--color-surface-3)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: Math.max(0, Math.min(100, progress)) + '%',
      background: 'var(--color-accent)'
    }
  })));
}
Object.assign(__ds_scope, { NavInfoCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/NavInfoCard.jsx", error: String((e && e.message) || e) }); }

// components/tracking/Checkpoint.jsx
try { (() => {
function Checkpoint({
  index = 1,
  label,
  reached = false,
  finish = false,
  size = 30,
  style
}) {
  const c = reached ? 'var(--color-checkpoint-reached)' : 'var(--color-checkpoint-upcoming)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--radius-full)',
      background: reached ? c : 'var(--color-surface-2)',
      border: '2px solid ' + c,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 0 0 3px var(--color-bg-base)'
    }
  }, finish ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "flag",
    size: size * 0.5,
    color: reached ? 'var(--color-text-on-accent)' : c
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: reached ? 'var(--color-text-on-accent)' : c,
      fontFamily: 'var(--font-ui)',
      fontSize: size * 0.42,
      fontWeight: 700
    }
  }, index)), label && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-text-secondary)',
      fontFamily: 'var(--font-ui)',
      fontSize: 11,
      whiteSpace: 'nowrap'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkpoint });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tracking/Checkpoint.jsx", error: String((e && e.message) || e) }); }

// components/tracking/RiderMarker.jsx
try { (() => {
const ROLE = {
  lead: 'var(--color-role-lead)',
  sweep: 'var(--color-role-sweep)',
  member: 'var(--color-role-member)'
};
function RiderMarker({
  role = 'member',
  label,
  initials,
  heading = 0,
  you = false,
  size = 40,
  style
}) {
  const c = ROLE[role] || ROLE.member;
  const ink = role === 'lead' ? 'var(--color-text-on-accent)' : '#0A0A0B';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: size,
      height: size,
      borderRadius: 'var(--radius-full)',
      background: c,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 0 0 3px var(--color-bg-base), 0 4px 12px rgba(0,0,0,.5)' + (you ? ', 0 0 0 6px ' + c + '55' : '')
    }
  }, role === 'lead' ? /*#__PURE__*/React.createElement("div", {
    style: {
      transform: 'rotate(' + heading + 'deg)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "navigation",
    size: size * 0.5,
    color: ink
  })) : role === 'sweep' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "flag",
    size: size * 0.5,
    color: ink
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: ink,
      fontFamily: 'var(--font-ui)',
      fontSize: size * 0.34,
      fontWeight: 700
    }
  }, initials || '·')), label && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 6px',
      borderRadius: 6,
      background: 'var(--color-surface-1)',
      color: 'var(--color-text-primary)',
      fontFamily: 'var(--font-ui)',
      fontSize: 11,
      fontWeight: 600,
      whiteSpace: 'nowrap'
    }
  }, label));
}
Object.assign(__ds_scope, { RiderMarker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tracking/RiderMarker.jsx", error: String((e && e.message) || e) }); }

// components/tracking/GroupMap.jsx
try { (() => {
const ROUTE = 'M40 300 C 90 250, 90 190, 150 180 S 240 150, 250 100 S 300 50, 340 60';
const DEF_CHECKS = [{
  index: 1,
  x: 40,
  y: 300,
  reached: true,
  label: 'Start'
}, {
  index: 2,
  x: 150,
  y: 180,
  reached: true,
  label: 'Bridge café'
}, {
  index: 3,
  x: 250,
  y: 100,
  reached: false,
  label: 'Overlook'
}, {
  index: 0,
  x: 340,
  y: 60,
  finish: true,
  reached: false,
  label: 'Summit'
}];
const DEF_RIDERS = [{
  role: 'lead',
  x: 250,
  y: 100,
  label: 'Mara',
  heading: 35
}, {
  role: 'member',
  x: 200,
  y: 150,
  initials: 'JD',
  you: true
}, {
  role: 'member',
  x: 120,
  y: 200,
  initials: 'AL'
}, {
  role: 'sweep',
  x: 80,
  y: 250,
  label: 'Theo'
}];
function GroupMap({
  riders = DEF_RIDERS,
  checkpoints = DEF_CHECKS,
  route = ROUTE,
  height = 360,
  round = true,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height,
      borderRadius: round ? 'var(--radius-lg)' : 0,
      overflow: 'hidden',
      background: 'var(--color-bg-void)',
      backgroundImage: 'linear-gradient(90deg,transparent 47px,rgba(138,138,142,.14) 48px),linear-gradient(0deg,transparent 47px,rgba(138,138,142,.14) 48px)',
      backgroundSize: '48px 48px,48px 48px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 380 340",
    width: "100%",
    height: "100%",
    preserveAspectRatio: "xMidYMid slice",
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: route,
    fill: "none",
    stroke: "var(--color-accent-deep)",
    strokeWidth: "9",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: route,
    fill: "none",
    stroke: "var(--color-accent-bright)",
    strokeWidth: "5",
    strokeLinecap: "round"
  })), checkpoints.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: 'c' + i,
    style: {
      position: 'absolute',
      left: c.x / 380 * 100 + '%',
      top: c.y / 340 * 100 + '%',
      transform: 'translate(-50%,-50%)',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Checkpoint, {
    index: c.index,
    label: c.label,
    reached: c.reached,
    finish: c.finish
  }))), riders.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: 'r' + i,
    style: {
      position: 'absolute',
      left: r.x / 380 * 100 + '%',
      top: r.y / 340 * 100 + '%',
      transform: 'translate(-50%,-50%)',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.RiderMarker, r))));
}
Object.assign(__ds_scope, { GroupMap });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tracking/GroupMap.jsx", error: String((e && e.message) || e) }); }

// components/tracking/RoleBadge.jsx
try { (() => {
const CFG = {
  lead: {
    c: 'var(--color-role-lead)',
    t: 'var(--color-text-on-accent)',
    l: 'Lead'
  },
  sweep: {
    c: 'var(--color-role-sweep)',
    t: '#1A0A06',
    l: 'Sweep'
  },
  member: {
    c: 'var(--color-role-member)',
    t: '#04121C',
    l: 'Member'
  }
};
function RoleBadge({
  role = 'member',
  style
}) {
  const r = CFG[role] || CFG.member;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 22,
      padding: '0 10px',
      borderRadius: 'var(--radius-full)',
      background: r.c,
      color: r.t,
      fontFamily: 'var(--font-ui)',
      fontSize: 12,
      fontWeight: 'var(--weight-semibold)',
      lineHeight: 1,
      ...style
    }
  }, r.l);
}
Object.assign(__ds_scope, { RoleBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tracking/RoleBadge.jsx", error: String((e && e.message) || e) }); }

// components/tracking/RiderListRow.jsx
try { (() => {
const ROLE = {
  lead: 'var(--color-role-lead)',
  sweep: 'var(--color-role-sweep)',
  member: 'var(--color-role-member)'
};
function RiderListRow({
  name,
  role = 'member',
  initials,
  distance,
  status = 'On route',
  you = false,
  style
}) {
  const c = ROLE[role] || ROLE.member;
  const off = status !== 'On route';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-md)',
      padding: '12px 0',
      borderBottom: '1px solid var(--color-divider)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      flex: 'none',
      borderRadius: 'var(--radius-full)',
      background: c,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#0A0A0B',
      fontFamily: 'var(--font-ui)',
      fontSize: 14,
      fontWeight: 700
    }
  }, initials || name?.slice(0, 2).toUpperCase()), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-text-primary)',
      fontSize: 15,
      fontWeight: 600,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, name, you ? ' (you)' : ''), /*#__PURE__*/React.createElement(__ds_scope.RoleBadge, {
    role: role
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      color: off ? 'var(--color-role-sweep)' : 'var(--color-text-secondary)',
      fontSize: 12,
      marginTop: 2
    }
  }, status)), distance != null && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-text-primary)',
      fontFamily: 'var(--font-numeric)',
      fontVariantNumeric: 'tabular-nums',
      fontSize: 14,
      fontWeight: 600,
      flex: 'none'
    }
  }, distance));
}
Object.assign(__ds_scope, { RiderListRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tracking/RiderListRow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wayix-app/App.jsx
try { (() => {
(() => {
  const {
    ConnectionCard,
    Button
  } = window.WayixDesignSystem_d17f72;
  function Connect({
    onNext,
    onBack
  }) {
    const [c, setC] = React.useState(false);
    React.useEffect(() => {
      const t = setTimeout(() => setC(true), 1400);
      return () => clearTimeout(t);
    }, []);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '8px 24px 32px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 24,
        fontWeight: 600,
        textAlign: 'center'
      }
    }, "Connecting your device"), /*#__PURE__*/React.createElement(ConnectionCard, {
      status: c ? 'Connected' : 'Pairing over Bluetooth…',
      connected: c
    })), /*#__PURE__*/React.createElement(Button, {
      disabled: !c,
      onClick: onNext
    }, "Confirm"));
  }
  function App() {
    const [screen, setScreen] = React.useState('splash');
    const go = s => () => setScreen(s);
    const map = {
      splash: /*#__PURE__*/React.createElement(window.Splash, {
        onStart: go('name')
      }),
      name: /*#__PURE__*/React.createElement(window.Onboarding, {
        onNext: go('connect'),
        onBack: go('splash')
      }),
      connect: /*#__PURE__*/React.createElement(Connect, {
        onNext: go('prefs'),
        onBack: go('name')
      }),
      prefs: /*#__PURE__*/React.createElement(window.Preferences, {
        onNext: go('voice'),
        onBack: go('connect')
      }),
      voice: /*#__PURE__*/React.createElement(window.Voice, {
        onNext: go('preview'),
        onBack: go('prefs')
      }),
      preview: /*#__PURE__*/React.createElement(window.RoutePreview, {
        onNext: go('nav'),
        onBack: go('voice')
      }),
      nav: /*#__PURE__*/React.createElement(window.Navigation, {
        onExit: go('preview'),
        onGroup: go('group')
      }),
      group: /*#__PURE__*/React.createElement(window.GroupRide, {
        onBack: go('nav')
      })
    };
    return /*#__PURE__*/React.createElement(window.PhoneFrame, null, map[screen]);
  }
  Object.assign(window, {
    App,
    Connect
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wayix-app/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wayix-app/GroupRide.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(() => {
  const {
    GroupMap,
    RiderListRow,
    BackButton,
    Icon
  } = window.WayixDesignSystem_d17f72;
  const riders = [{
    name: 'Mara Ko',
    role: 'lead',
    distance: '—',
    status: 'On route'
  }, {
    name: 'You',
    role: 'member',
    initials: 'JD',
    distance: '0.3 mi',
    status: 'On route',
    you: true
  }, {
    name: 'Amir Lee',
    role: 'member',
    initials: 'AL',
    distance: '0.6 mi',
    status: 'On route'
  }, {
    name: 'Priya N.',
    role: 'member',
    initials: 'PN',
    distance: '0.9 mi',
    status: 'Fell behind'
  }, {
    name: 'Theo Vance',
    role: 'sweep',
    distance: '1.4 mi',
    status: 'On route'
  }];
  function GroupRide({
    onBack
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0
      }
    }, /*#__PURE__*/React.createElement(GroupMap, {
      round: false,
      height: "100%"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        padding: '12px 16px 0',
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--color-surface-1)',
        borderRadius: 999
      }
    }, /*#__PURE__*/React.createElement(BackButton, {
      onClick: onBack
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--color-surface-1)',
        borderRadius: 999,
        padding: '8px 14px',
        fontSize: 13,
        fontWeight: 600,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        boxShadow: 'var(--shadow-card)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: 999,
        background: 'var(--color-accent)'
      }
    }), "Sunday Ridge Loop \xB7 5 riders")), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        background: 'var(--color-surface-1)',
        borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0',
        boxShadow: 'var(--shadow-card)',
        padding: '16px 20px 24px',
        maxHeight: '52%',
        overflowY: 'auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40,
        height: 4,
        borderRadius: 999,
        background: 'var(--color-surface-3)',
        margin: '0 auto 14px'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 18,
        fontWeight: 600
      }
    }, "Group"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--color-text-secondary)'
      }
    }, "Checkpoint 2 / 4 \xB7 Overlook next")), riders.map((r, i) => /*#__PURE__*/React.createElement(RiderListRow, _extends({
      key: i
    }, r)))));
  }
  Object.assign(window, {
    GroupRide
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wayix-app/GroupRide.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wayix-app/MiniMap.jsx
try { (() => {
(() => {
  function MiniMap({
    height = 200,
    round = true
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height,
        borderRadius: round ? 'var(--radius-md)' : 0,
        overflow: 'hidden',
        position: 'relative',
        background: 'var(--color-bg-void)',
        backgroundImage: 'linear-gradient(90deg,transparent 39px,rgba(138,138,142,.18) 40px),linear-gradient(0deg,transparent 39px,rgba(138,138,142,.18) 40px),linear-gradient(120deg,transparent 79px,rgba(138,138,142,.22) 80px)',
        backgroundSize: '40px 40px,40px 40px,160px 160px'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "100%",
      height: "100%",
      style: {
        position: 'absolute',
        inset: 0
      },
      preserveAspectRatio: "none",
      viewBox: "0 0 300 200"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M20 180 L90 150 L120 90 L200 70 L260 30",
      fill: "none",
      stroke: "var(--color-accent-deep)",
      strokeWidth: "9",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20 180 L90 150 L120 90 L200 70 L260 30",
      fill: "none",
      stroke: "var(--color-accent-bright)",
      strokeWidth: "5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "20",
      cy: "180",
      r: "9",
      fill: "var(--color-accent)",
      stroke: "var(--color-bg-void)",
      strokeWidth: "3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "260",
      cy: "30",
      r: "7",
      fill: "var(--color-bg-void)",
      stroke: "var(--color-accent)",
      strokeWidth: "3"
    })));
  }
  Object.assign(window, {
    MiniMap
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wayix-app/MiniMap.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wayix-app/Navigation.jsx
try { (() => {
(() => {
  const {
    NavInfoCard,
    TransportBar,
    IconButton,
    Icon
  } = window.WayixDesignSystem_d17f72;
  function Navigation({
    onExit,
    onGroup
  }) {
    const [playing, setPlaying] = React.useState(true);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0
      }
    }, /*#__PURE__*/React.createElement(window.MiniMap, {
      height: "100%",
      round: false
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        height: '100%'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement(NavInfoCard, {
      icon: "incline",
      metric: "30 ft",
      descriptor: "Slight incline \xB7 +5%",
      progress: 40
    })), /*#__PURE__*/React.createElement(IconButton, {
      name: "chevron-left",
      variant: "surface",
      size: 44,
      onClick: onExit,
      style: {
        alignSelf: 'flex-start',
        background: 'var(--color-surface-1)'
      }
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(NavInfoCard, {
      icon: "turn-right",
      metric: "90 ft",
      descriptor: "Turn right \xB7 4th St",
      progress: 70
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement("div", {
      onClick: onGroup,
      role: "button",
      style: {
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '10px 14px',
        background: 'var(--color-surface-1)',
        borderRadius: 'var(--radius-full)',
        boxShadow: 'var(--shadow-card)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "navigation",
      size: 18,
      color: "var(--color-role-lead)"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontSize: 13,
        fontWeight: 600,
        color: 'var(--color-text-primary)'
      }
    }, "Group ride \xB7 5 riders"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: 'var(--color-role-sweep)',
        fontWeight: 600
      }
    }, "1 behind"), /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 18,
      color: "var(--color-text-secondary)"
    })), /*#__PURE__*/React.createElement(TransportBar, {
      startLabel: "0 ft",
      endLabel: "1.4 mi",
      progress: 38,
      playing: playing,
      onToggle: () => setPlaying(!playing)
    })));
  }
  Object.assign(window, {
    Navigation
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wayix-app/Navigation.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wayix-app/Onboarding.jsx
try { (() => {
(() => {
  const {
    Button,
    Input,
    BackButton
  } = window.WayixDesignSystem_d17f72;
  function Onboarding({
    onNext,
    onBack
  }) {
    const [name, setName] = React.useState('');
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '8px 24px 32px'
      }
    }, /*#__PURE__*/React.createElement(BackButton, {
      onClick: onBack
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24,
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 24,
        lineHeight: '30px',
        fontWeight: 600,
        marginBottom: 8
      }
    }, "Welcome aboard."), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 16,
        color: 'var(--color-text-secondary)',
        marginBottom: 24
      }
    }, "What should we call you?"), /*#__PURE__*/React.createElement(Input, {
      placeholder: "Your name",
      value: name,
      onChange: e => setName(e.target.value)
    })), /*#__PURE__*/React.createElement(Button, {
      disabled: !name.trim(),
      onClick: onNext
    }, "Next"));
  }
  Object.assign(window, {
    Onboarding
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wayix-app/Onboarding.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wayix-app/PhoneFrame.jsx
try { (() => {
(() => {
  const {
    Icon
  } = window.WayixDesignSystem_d17f72;
  function StatusBar() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height: 44,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        fontSize: 14,
        fontWeight: 600,
        color: 'var(--color-text-primary)',
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontVariantNumeric: 'tabular-nums'
      }
    }, "9:41"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 6,
        alignItems: 'center',
        fontSize: 12
      }
    }, "\uDBC1\uDE47 \uDBC1\uDEE8 ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontVariantNumeric: 'tabular-nums'
      }
    }, "\uDBC3\uDEB8")));
  }
  function PhoneFrame({
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: 390,
        height: 844,
        background: 'var(--color-bg-base)',
        borderRadius: 44,
        overflow: 'hidden',
        position: 'relative',
        boxShadow: '0 40px 100px rgba(0,0,0,.6),0 0 0 10px #050506,0 0 0 12px #2A2A2D',
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column'
      }
    }, children), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: 8,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 134,
        height: 5,
        borderRadius: 3,
        background: 'rgba(255,255,255,.5)'
      }
    }));
  }
  Object.assign(window, {
    PhoneFrame,
    StatusBar
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wayix-app/PhoneFrame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wayix-app/Preferences.jsx
try { (() => {
(() => {
  const {
    Button,
    BackButton,
    SegmentedControl,
    Stepper,
    Icon
  } = window.WayixDesignSystem_d17f72;
  function Section({
    title,
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 32
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 20,
        fontWeight: 600,
        marginBottom: 16
      }
    }, title), children);
  }
  function Row({
    label,
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 0',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 500,
        color: 'var(--color-text-secondary)'
      }
    }, label), children);
  }
  function Preferences({
    onNext,
    onBack
  }) {
    const [incline, setIncline] = React.useState(10);
    const [effort, setEffort] = React.useState('Medium');
    const [dist, setDist] = React.useState(2);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '8px 24px 0',
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement(BackButton, {
      onClick: onBack
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 24,
        fontWeight: 600,
        margin: '16px 0 8px'
      }
    }, "My preferences")), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        padding: '16px 24px'
      }
    }, /*#__PURE__*/React.createElement(Section, {
      title: "What matters most"
    }, /*#__PURE__*/React.createElement(Row, {
      label: "Max incline"
    }, /*#__PURE__*/React.createElement(Stepper, {
      value: incline,
      display: incline + '%',
      min: 0,
      max: 30,
      step: 5,
      onChange: setIncline
    })), /*#__PURE__*/React.createElement(Row, {
      label: "Effort level"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 200
      }
    }, /*#__PURE__*/React.createElement(SegmentedControl, {
      value: effort,
      onChange: setEffort
    }))), /*#__PURE__*/React.createElement(Row, {
      label: "Trip distance cap"
    }, /*#__PURE__*/React.createElement(Stepper, {
      value: dist,
      display: dist + ' mi',
      min: 1,
      max: 10,
      onChange: setDist
    }))), /*#__PURE__*/React.createElement(Section, {
      title: "My device"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '12px 16px',
        background: 'var(--color-surface-2)',
        borderRadius: 'var(--radius-md)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "projector",
      size: 22,
      color: "var(--color-accent)"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 600
      }
    }, "RideInSync Beam Pro"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--color-text-secondary)'
      }
    }, "Connected \xB7 Bluetooth")), /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 20,
      color: "var(--color-accent)"
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 24px 32px',
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      onClick: onNext
    }, "Confirm")));
  }
  Object.assign(window, {
    Preferences
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wayix-app/Preferences.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wayix-app/RoutePreview.jsx
try { (() => {
(() => {
  const {
    Button,
    BackButton,
    TurnRow,
    Card
  } = window.WayixDesignSystem_d17f72;
  function RoutePreview({
    onNext,
    onBack
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '8px 24px 0',
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement(BackButton, {
      onClick: onBack
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 24,
        fontWeight: 600,
        margin: '16px 0 12px'
      }
    }, "Ferry Building")), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        padding: '0 24px'
      }
    }, /*#__PURE__*/React.createElement(window.MiniMap, {
      height: 180
    }), /*#__PURE__*/React.createElement(Card, {
      style: {
        margin: '16px 0',
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--color-text-secondary)'
      }
    }, "Time"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 20,
        fontWeight: 600
      }
    }, "18 min")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--color-text-secondary)'
      }
    }, "Distance"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 20,
        fontWeight: 600
      }
    }, "1.4 mi")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--color-text-secondary)'
      }
    }, "Max incline"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 20,
        fontWeight: 600,
        color: 'var(--color-accent)'
      }
    }, "+5%"))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement(TurnRow, {
      icon: "straight",
      distance: "120 ft",
      street: "Continue on Market St"
    }), /*#__PURE__*/React.createElement(TurnRow, {
      icon: "incline",
      distance: "300 ft",
      street: "Slight incline ahead"
    }), /*#__PURE__*/React.createElement(TurnRow, {
      icon: "turn-right",
      distance: "90 ft",
      street: "4th St"
    }), /*#__PURE__*/React.createElement(TurnRow, {
      icon: "flag",
      distance: "0.2 mi",
      street: "Arrive at Ferry Building"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '12px 24px 32px',
        flex: 'none',
        display: 'flex',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      fullWidth: false,
      onClick: onBack
    }, "Back"), /*#__PURE__*/React.createElement(Button, {
      onClick: onNext
    }, "Start")));
  }
  Object.assign(window, {
    RoutePreview
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wayix-app/RoutePreview.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wayix-app/Splash.jsx
try { (() => {
(() => {
  const {
    Button,
    IconButton
  } = window.WayixDesignSystem_d17f72;
  function Splash({
    onStart
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        padding: '0 24px 32px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: -80,
        right: -60,
        width: 340,
        height: 340,
        background: 'radial-gradient(circle,var(--color-accent-glow),transparent 60%)',
        pointerEvents: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-brand)',
        fontSize: 56,
        fontWeight: 600,
        letterSpacing: '-.01em',
        marginBottom: 24
      }
    }, "RideInSync"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 22,
        lineHeight: '30px',
        maxWidth: 300
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--color-text-secondary)'
      }
    }, "Just "), /*#__PURE__*/React.createElement("b", null, "tell us"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--color-text-secondary)'
      }
    }, " where you're headed, and RideInSync "), /*#__PURE__*/React.createElement("b", null, "handles"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--color-text-secondary)'
      }
    }, " the route."))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 24
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      name: "play",
      variant: "accent",
      size: 72,
      iconSize: 30
    })), /*#__PURE__*/React.createElement(Button, {
      onClick: onStart
    }, "Get started"));
  }
  Object.assign(window, {
    Splash
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wayix-app/Splash.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wayix-app/Voice.jsx
try { (() => {
(() => {
  const {
    Button,
    BackButton,
    VoiceBlob
  } = window.WayixDesignSystem_d17f72;
  function Voice({
    onNext,
    onBack
  }) {
    const [state, setState] = React.useState('idle');
    const [msg, setMsg] = React.useState(null);
    React.useEffect(() => {
      const a = setTimeout(() => setState('listening'), 700);
      const b = setTimeout(() => {
        setState('speaking');
        setMsg('Take me to the Ferry Building');
      }, 2200);
      const c = setTimeout(() => setState('idle'), 3600);
      return () => {
        clearTimeout(a);
        clearTimeout(b);
        clearTimeout(c);
      };
    }, []);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '8px 24px 32px'
      }
    }, /*#__PURE__*/React.createElement(BackButton, {
      onClick: onBack
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 20,
        color: 'var(--color-text-secondary)',
        textAlign: 'center'
      }
    }, state === 'listening' ? 'Listening…' : state === 'speaking' ? 'Got it' : 'Where would you like to go?'), msg && /*#__PURE__*/React.createElement("div", {
      style: {
        alignSelf: 'flex-end',
        maxWidth: '80%',
        padding: '12px 16px',
        background: 'var(--color-surface-2)',
        borderRadius: '20px 20px 4px 20px',
        fontSize: 16
      }
    }, msg)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement(VoiceBlob, {
      state: state,
      size: 240
    })), /*#__PURE__*/React.createElement(Button, {
      onClick: onNext
    }, "Preview route"));
  }
  Object.assign(window, {
    Voice
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wayix-app/Voice.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ConnectionCard = __ds_scope.ConnectionCard;

__ds_ns.VoiceBlob = __ds_scope.VoiceBlob;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.BackButton = __ds_scope.BackButton;

__ds_ns.TransportBar = __ds_scope.TransportBar;

__ds_ns.TurnRow = __ds_scope.TurnRow;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.NavInfoCard = __ds_scope.NavInfoCard;

__ds_ns.Checkpoint = __ds_scope.Checkpoint;

__ds_ns.GroupMap = __ds_scope.GroupMap;

__ds_ns.RiderListRow = __ds_scope.RiderListRow;

__ds_ns.RiderMarker = __ds_scope.RiderMarker;

__ds_ns.RoleBadge = __ds_scope.RoleBadge;

})();
